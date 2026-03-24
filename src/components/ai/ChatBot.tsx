'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Loader2, Minus, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { ChatMessage } from '@/lib/ai';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm AmanaBot. How can I help you with your hosting or domain needs today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      const data = await response.json();
      if (data.response) {
        setMessages([...newMessages, { role: 'assistant', content: data.response }]);
      }
    } catch (error) {
       console.error("Chat Error:", error);
       setMessages([...newMessages, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting to the cloud right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className={cn(
              "w-[90vw] sm:w-[400px] pointer-events-auto transition-all duration-300",
              isMinimized ? "h-16" : "h-[500px] max-h-[70vh]"
            )}
          >
            <Card className="h-full flex flex-col overflow-hidden bg-white/90 dark:bg-surface-950/90 backdrop-blur-2xl border border-surface-200 dark:border-white/10 shadow-2xl rounded-[2rem]">
              {/* Header */}
              <div className="p-4 bg-primary-600 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-none">AmanaBot</h4>
                    <span className="text-[10px] opacity-70">AI Assistant</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => setIsMinimized(!isMinimized)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                    {isMinimized ? <Maximize2 size={16} /> : <Minus size={16} />}
                  </button>
                  <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                    <X size={16} />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div 
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth scrollbar-hide"
                  >
                    {messages.map((m, i) => (
                      <div key={i} className={cn(
                        "flex gap-3 max-w-[85%]",
                        m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}>
                        <div className={cn(
                          "w-8 h-8 rounded-xl flex items-center justify-center shrink-0",
                          m.role === 'user' ? "bg-surface-100 dark:bg-surface-800 text-surface-600" : "bg-primary-100 dark:bg-primary-900/30 text-primary-600"
                        )}>
                          {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div className={cn(
                          "p-3 rounded-2xl text-sm leading-relaxed",
                          m.role === 'user' 
                            ? "bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white rounded-tr-none" 
                            : "bg-primary-50 dark:bg-primary-950/30 text-surface-900 dark:text-surface-200 rounded-tl-none border border-primary-500/10"
                        )}>
                          {m.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 mr-auto max-w-[85%]">
                        <div className="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center shrink-0">
                          <Loader2 size={16} className="animate-spin" />
                        </div>
                        <div className="p-3 bg-primary-50 dark:bg-primary-950/30 rounded-2xl rounded-tl-none border border-primary-500/10">
                          <span className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce"></span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-surface-100 dark:border-white/5 bg-surface-50/50 dark:bg-surface-950/50 shrink-0">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 bg-white dark:bg-surface-900 border border-surface-200 dark:border-white/5 rounded-xl px-4 py-2 text-sm text-surface-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <Button 
                        size="icon" 
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="rounded-xl h-10 w-10 flex-shrink-0"
                      >
                        <Send size={18} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-premium pointer-events-auto relative",
          isOpen ? "bg-surface-900 dark:bg-white dark:text-surface-900" : "bg-primary-600"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
              <MessageCircle size={32} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-success-500 rounded-full border-4 border-white dark:border-surface-950 flex items-center justify-center">
                 <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
