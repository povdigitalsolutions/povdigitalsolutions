'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { businessCategories, budgetOptions } from '@/data/site-data';
import { whatsappLink } from '@/lib/site-config';

const leadSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  business: z.string().min(2, 'Please enter your business name'),
  category: z.string().min(1, 'Please select a category'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  requirement: z.string().min(5, 'Please tell us what you need'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { category: '', budget: '' },
  });

  const category = watch('category');
  const budget = watch('budget');

  const onSubmit = async (data: LeadFormData) => {
    setSubmitState('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Request failed (${res.status})`);
      }
      setSubmitState('success');
      reset();
    } catch (err) {
      setSubmitState('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  if (submitState === 'success') {
    return (
      <Card>
        <CardContent className="flex flex-col items-center p-10 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-display text-xl font-semibold text-ink">Thank You!</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Your requirement has been captured. Our team will reach out to you shortly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" onClick={() => setSubmitState('idle')}>
              Submit Another
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Also Message on WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {submitState === 'error' && (
            <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
              <div>
                <p className="text-sm font-medium text-red-800">Couldn't submit your requirement</p>
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="lead-name">Name <span className="text-red-500">*</span></Label>
              <Input id="lead-name" placeholder="Your name" {...register('name')} />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lead-business">Business <span className="text-red-500">*</span></Label>
              <Input id="lead-business" placeholder="Business name" {...register('business')} />
              {errors.business && <p className="text-xs text-red-500">{errors.business.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="lead-phone">Phone <span className="text-red-500">*</span></Label>
              <Input id="lead-phone" placeholder="+91 XXXXX XXXXX" {...register('phone')} />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="space-y-2">
              <Label>Category <span className="text-red-500">*</span></Label>
              <Select
                value={category}
                onValueChange={(v) => setValue('category', v, { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {businessCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-xs text-red-500">{errors.category.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-requirement">Requirement <span className="text-red-500">*</span></Label>
            <Input
              id="lead-requirement"
              placeholder="What do you need? (e.g. website with booking)"
              {...register('requirement')}
            />
            {errors.requirement && <p className="text-xs text-red-500">{errors.requirement.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Budget Range <span className="text-red-500">*</span></Label>
            <Select
              value={budget}
              onValueChange={(v) => setValue('budget', v, { shouldValidate: true })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your budget" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget && <p className="text-xs text-red-500">{errors.budget.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-message">Additional Message</Label>
            <Textarea
              id="lead-message"
              rows={3}
              placeholder="Anything else you'd like to tell us..."
              {...register('message')}
            />
          </div>

          <Button
            type="submit"
            disabled={submitState === 'loading'}
            className="w-full bg-brand-gradient"
            size="lg"
          >
            {submitState === 'loading' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Requirement
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
