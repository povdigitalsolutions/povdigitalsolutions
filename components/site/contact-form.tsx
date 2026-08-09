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
import { businessCategories } from '@/data/site-data';
import { whatsappLink } from '@/lib/site-config';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  businessName: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  category: z.string().min(1, 'Please select a category'),
  need: z.string().min(1, 'Please select what you need'),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { category: '', need: '' },
  });

  const category = watch('category');
  const need = watch('need');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
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
          <h3 className="font-display text-xl font-semibold text-ink">Requirement Sent!</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Thank you for reaching out. We'll get back to you shortly to discuss your requirements.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              onClick={() => setSubmitState('idle')}
            >
              Send Another Message
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
                <p className="text-sm font-medium text-red-800">Couldn't send your message</p>
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
              <Input id="name" placeholder="Your name" {...register('name')} />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" placeholder="Your business name" {...register('businessName')} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
              <Input id="phone" placeholder="+91 XXXXX XXXXX" {...register('phone')} />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Business Category <span className="text-red-500">*</span></Label>
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
            <div className="space-y-2">
              <Label>What do you need? <span className="text-red-500">*</span></Label>
              <Select
                value={need}
                onValueChange={(v) => setValue('need', v, { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select what you need" />
                </SelectTrigger>
                <SelectContent>
                  {businessCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.need && <p className="text-xs text-red-500">{errors.need.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Tell us about your business and what you need..."
              {...register('message')}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
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
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Requirement
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
