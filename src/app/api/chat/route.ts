import { NextResponse } from 'next/server';
import { generateChatResponse, ChatMessage } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const response = await generateChatResponse(messages as ChatMessage[]);
    return NextResponse.json({ response });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : 'Chat failed';
    console.error("Chat API Route Error:", error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
