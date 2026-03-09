'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, siteContent } from '@/data/siteContent';
import { MobileMenu } from './MobileMenu';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-tactical-950/80 backdrop-blur-xl">
      <div className="container-max flex h-16 items-center justify-between gap-4">
        <Link href="#arena-paintball" className="text-sm font-bold md:text-base">Arena Paintball <span className="text-accent-500">Piratininga</span></Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">{item.label}</Link>
          ))}
        </nav>
        <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida.')} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-accent-600 md:inline-flex">Agendar pelo WhatsApp</a>
        <button aria-label={open ? 'Fechar menu' : 'Abrir menu'} className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <MobileMenu open={open} items={navItems} onClose={() => setOpen(false)} />
      <div className="md:hidden container-max pb-3">
        <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida.')} target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-black">Agendar pelo WhatsApp</a>
      </div>
    </header>
  );
}
