import { NextResponse } from 'next/server';
import { lookupDomain } from '@/lib/whmcs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json(
      { error: 'Domain parameter is required' },
      { status: 400 }
    );
  }

  try {
    const results = await lookupDomain(domain);
    return NextResponse.json({ results });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
    console.error("API Route Error:", err); // Changed 'error' to 'err'
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
