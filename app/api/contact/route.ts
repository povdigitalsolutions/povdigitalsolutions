import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2),
  businessName: z.string().optional(),
  phone: z.string().min(10),
  email: z.string().email(),
  category: z.string().min(1),
  need: z.string().min(1),
  message: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Please check your form details and try again.',
        },
        { status: 400 }
      );
    }

    const data = result.data;

    const { error } = await resend.emails.send({
      from: 'POV Digital Solutions <onboarding@resend.dev>',
      to: ['povdigitalsolution@gmail.com'],
      replyTo: data.email,
      subject: `New Website Enquiry — ${data.businessName || data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
          <h2 style="color: #0f2a5f;">
            New Requirement — POV Digital Solutions
          </h2>

          <hr />

          <h3>Customer Details</h3>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Business:</strong> ${data.businessName || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Business Category:</strong> ${data.category}</p>
          <p><strong>Requirement:</strong> ${data.need}</p>

          <h3>Message</h3>

          <p style="white-space: pre-wrap;">
            ${data.message}
          </p>

          <hr />

          <p style="font-size: 12px; color: #6b7280;">
            This enquiry was submitted through the POV Digital Solutions website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        { error: 'Unable to send your enquiry right now. Please try WhatsApp or call us.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Requirement sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      {
        error: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}