'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      )}
    >
      {expanded && (
        <div className="flex flex-col items-end gap-2 animate-fade-up">
          <button
            onClick={() => setExpanded(false)}
            className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-md transition-colors hover:bg-muted"
          >
            <X className="h-3.5 w-3.5" />
            Close
          </button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-ink">Chat With Us</span>
              <span className="text-xs text-muted-foreground">We usually reply quickly</span>
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Chat with us on WhatsApp"
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition-all hover:bg-green-600 hover:scale-105',
          expanded && 'rotate-90'
        )}
      >
        {expanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
