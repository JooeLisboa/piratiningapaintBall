'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar no WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-3 text-sm font-bold text-black shadow-brand transition hover:bg-brand-primaryHover"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: [1, 1.03, 1], opacity: 1 }}
      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4 }}
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
    </motion.a>
  );
}
