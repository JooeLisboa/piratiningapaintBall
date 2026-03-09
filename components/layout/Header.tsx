'use client';

import Link from 'next/link';
import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { headerNavItems } from '@/data/siteContent';
import { MobileMenu } from './MobileMenu';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-white/15 bg-black/80 shadow-[0_14px_40px_rgba(0,0,0,.45)] backdrop-blur-2xl'
          : 'border-transparent bg-gradient-to-b from-black/85 to-black/35 backdrop-blur-md'
      )}
    >
      <div className="container-max flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">Arena Paintball</p>
          <p className="text-lg font-black tracking-wide text-white transition group-hover:text-accent-500 md:text-xl">
            PIRATININGA
          </p>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <motion.a
          href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden items-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-bold text-black shadow-glow md:inline-flex"
        >
          <MessageCircle size={16} />
          Agendar pelo WhatsApp
        </motion.a>

        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="rounded-lg border border-white/20 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <MobileMenu open={open} items={headerNavItems} onClose={() => setOpen(false)} />
    </header>
  );
}
