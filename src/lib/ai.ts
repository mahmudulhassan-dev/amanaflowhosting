/**
 * AI Domain Name Generation Utility
 * Uses OpenAI (if credentials available) or a Mock Brainstorming Engine.
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
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
  // Prefer OpenAI, fallback to Gemini, then Mock
  if (OPENAI_API_KEY) {
    try {
      return await generateOpenAISuggestions(description, vibe);
    } catch (err) {
      console.error("OpenAI Fallback to Gemini:", err);
    }
  }

  if (GEMINI_API_KEY) {
    try {
      return await generateGeminiSuggestions(description, vibe);
    } catch (err) {
      console.error("Gemini Fallback to Mock:", err);
    }
  }

  console.warn("No AI API Keys found. Running in MOCK Mode.");
  return mockGenerateSuggestions(description, vibe);
}

async function generateOpenAISuggestions(description: string, vibe: string): Promise<AISuggestion[]> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are a professional brand naming expert. Generate 8 unique, brandable, premium domain names based on the description. Return ONLY a JSON array of objects with "name", "tld", and "reason" keys. No markdown, no filler.'
        },
        {
          role: 'user',
          content: `Description: ${description}. Vibe: ${vibe}. Language: Bengali/English Mixed if applicable.`
        }
      ],
      response_format: { type: "json_object" }
    })
  });

  const data = await response.json();
  const content = JSON.parse(data.choices[0].message.content);
  return content.suggestions || content.domains || Object.values(content)[0] as AISuggestion[];
}

async function generateGeminiSuggestions(description: string, vibe: string): Promise<AISuggestion[]> {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are a professional brand naming expert. Generate 8 unique, brandable, premium domain names based on description: "${description}" with vibe: "${vibe}". Return as JSON array of objects: {name, tld, reason}.`
        }]
      }]
    })
  });

  const data = await response.json();
  const rawText = data.candidates[0].content.parts[0].text;
  const jsonMatch = rawText.match(/\[.*\]/s);
  return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
}

/**
 * Mock Brainstorming Engine
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
      resolve(suggestions);
    }, 2000);
  });
}

export async function generateChatResponse(messages: ChatMessage[]): Promise<string> {
  if (OPENAI_API_KEY) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          messages: [
            { role: 'system', content: 'You are AmanaBot, a premium cloud hosting assistant for AmanaFlow. Be professional, helpful, and concise.' },
            ...messages
          ]
        })
      });
      const data = await response.json();
      return data.choices[0].message.content;
    } catch {
      return mockChatResponse(messages);
    }
  }
  return mockChatResponse(messages);
}

function mockChatResponse(messages: ChatMessage[]): Promise<string> {
  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content.toLowerCase() || '';
  
  return new Promise((resolve) => {
    setTimeout(() => {
      if (lastUserMessage.includes('price')) {
        resolve("AmanaFlow offers competitive pricing! .com domains start at 1250 BDT/yr. Is there a specific service you're interested in?");
      } else {
        resolve("Hello! I'm AmanaBot, your cloud hosting assistant. How can I help you build your digital empire today?");
      }
    }, 1500);
  });
}

