/**
 * AI Domain Name Generation Utility
 * Uses OpenAI (if credentials available) or a Mock Brainstorming Engine.
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

export interface AISuggestion {
  name: string;
  tld: string;
  reason: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function generateDomainSuggestions(description: string, vibe: string = 'professional'): Promise<AISuggestion[]> {
  const needsMock = !OPENAI_API_KEY;

  if (needsMock) {
    console.warn("OpenAI API Key missing. Running in MOCK Mode for Phase 3.");
    return mockGenerateSuggestions(description, vibe);
  }

  try {
    // Prod implementation using OpenAI would go here
    if (OPENAI_API_KEY) {
      console.log(`Using model: ${OPENAI_MODEL}`);
    }
    return mockGenerateSuggestions(description, vibe);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
    console.error("AI Generation Error:", message);
    throw new Error("AI engine is currently unavailable.");
  }
}

/**
 * Mock Brainstorming Engine
 * Generates creative suggestions based on input keywords.
 */
function mockGenerateSuggestions(description: string, vibe: string): Promise<AISuggestion[]> {
  const keywords = description.toLowerCase().split(' ').filter(word => word.length > 3);
  const primary = keywords[0] || 'cloud';
  
  const vibes: Record<string, string[]> = {
    professional: ['Global', 'Solutions', 'Systems', 'Pro', 'Hub'],
    creative: ['Flow', 'Pulse', 'Spark', 'Wave', 'Verse'],
    techy: ['Next', 'Sync', 'Core', 'Logic', 'Lab']
  };

  const selectedVibe = vibes[vibe] || vibes.professional;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const suggestions: AISuggestion[] = selectedVibe.map((v) => ({
        name: Math.random() > 0.5 ? `${primary}${v.toLowerCase()}` : `${v.toLowerCase()}${primary}`,
        tld: '.com',
        reason: `Combines your core keyword "${primary}" with ${vibe} growth indicators.`
      }));

      // Add some TLD variety
      suggestions[1].tld = '.net';
      suggestions[3].tld = '.io';
      
      resolve(suggestions);
    }, 2000);
  });
}

/**
 * Chat Completion Logic
 */
export async function generateChatResponse(messages: ChatMessage[]): Promise<string> {
  const needsMock = !OPENAI_API_KEY;

  if (needsMock) {
    return mockChatResponse(messages);
  }

  try {
    // OpenAI Chat Completion would go here
    return mockChatResponse(messages);
  } catch (error) {
    console.error("Chat Error:", error);
    throw new Error("Chat assistant is currently offline.");
  }
}

function mockChatResponse(messages: ChatMessage[]): Promise<string> {
  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content.toLowerCase() || '';
  
  return new Promise((resolve) => {
    setTimeout(() => {
      if (lastUserMessage.includes('price') || lastUserMessage.includes('cost')) {
        resolve("AmanaFlow offers competitive pricing! .com domains start at $9.99/yr, and VPS plans start from just $5/mo. Is there a specific service you're interested in?");
      } else if (lastUserMessage.includes('vps') || lastUserMessage.includes('server')) {
        resolve("Our VPS instances feature NVMe storage, DDR5 RAM, and 10Gbps networking. We have data centers in multiple regions including Bangladesh and USA.");
      } else if (lastUserMessage.includes('hello') || lastUserMessage.includes('hi')) {
        resolve("Hello! I'm AmanaBot, your cloud hosting assistant. How can I help you build your digital empire today?");
      } else {
        resolve("That's an interesting question! As an AI assistant for AmanaFlow, I can help you find the perfect hosting plan or domain name. Would you like to see our latest offers?");
      }
    }, 1500);
  });
}

