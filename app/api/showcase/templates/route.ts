import { NextResponse } from 'next/server';
import { showcaseTemplates } from '@/data/showcase-registry';

export async function GET() {
  try {
    return NextResponse.json(showcaseTemplates, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to load templates' },
      { status: 500 }
    );
  }
}
