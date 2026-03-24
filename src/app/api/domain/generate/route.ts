import { NextResponse } from 'next/server';
import { generateDomainSuggestions } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { description, vibe } = await request.json();

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 }
      );
    }

    const suggestions = await generateDomainSuggestions(description, vibe);
    return NextResponse.json({ suggestions });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'AI generation failed';
    console.error("AI API Route Error:", err);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
