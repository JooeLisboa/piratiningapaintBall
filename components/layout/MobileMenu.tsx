'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderNavItem } from '@/data/siteContent';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function MobileMenu({ open, items, onClose }: { open: boolean; items: HeaderNavItem[]; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-brand-primary/30 bg-brand-bg/95 backdrop-blur-2xl md:hidden">
          <nav className="container-max grid gap-2 py-4">
            {items.map((item) => (
              <Link key={item.label} href={item.href} onClick={onClose} className="rounded-xl border border-white/10 bg-brand-surface/50 px-4 py-3 text-base font-semibold text-brand-text transition hover:border-brand-primary/60 hover:bg-brand-primary/10">
                {item.label}
              </Link>
            ))}
            <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
              Agendar pelo WhatsApp
            </a>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
