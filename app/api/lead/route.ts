import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const leadSchema = z.object({
  name: z.string().min(2),
  business: z.string().min(2),
  category: z.string().min(1),
  phone: z.string().min(10),
  requirement: z.string().min(5),
  budget: z.string().min(1),
  message: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Please check your requirement details and try again.',
        },
        { status: 400 }
      );
    }

    const data = result.data;

    const { error } = await resend.emails.send({
     from: 'onboarding@resend.dev',
  to: ['povdigitalsolution@gmail.com'],
  subject: `New POV Lead - ${data.business}`,
  html: `
    <h2>New POV Digital Solutions Lead</h2>

    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Business:</strong> ${data.business}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Category:</strong> ${data.category}</p>
    <p><strong>Requirement:</strong> ${data.requirement}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <p><strong>Message:</strong> ${data.message || 'None'}</p>
  `,
    });

    if (error) {
      console.error('Resend lead error:', error);

      return NextResponse.json(
        {
          error:
            'Unable to submit your requirement right now. Please try WhatsApp or call us.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead API error:', error);

    return NextResponse.json(
      {
        error: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}