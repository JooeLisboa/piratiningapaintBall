'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderNavItem } from '@/data/siteContent';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function MobileMenu({ open, items, onClose }: { open: boolean; items: HeaderNavItem[]; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-white/10 bg-black/90 backdrop-blur-2xl md:hidden"
        >
          <nav className="container-max grid gap-2 py-4">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium transition hover:border-accent-500/60 hover:bg-accent-500/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-accent-500 px-4 py-3 text-sm font-bold text-black"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
