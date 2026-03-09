'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/shared/Badge';
import { siteContent } from '@/data/siteContent';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function HeroSection() {
  return (
    <section id="arena-paintball" className="relative overflow-hidden py-20 md:py-28">
      <Image src="https://images.unsplash.com/photo-1526232373132-0e4ee3285003?auto=format&fit=crop&w=1800&q=80" alt="Arena de paintball" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="container-max relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <Badge>{siteContent.heroContent.social.rating} • {siteContent.heroContent.social.reviews}</Badge>
          <h1 className="mt-5 text-balance text-4xl font-black leading-tight md:text-6xl">{siteContent.heroContent.title}</h1>
          <p className="mt-5 text-lg text-zinc-200">{siteContent.heroContent.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent-500 px-6 py-3 font-semibold text-black transition hover:bg-accent-600">{siteContent.heroContent.ctaPrimary}</a>
            <Link href="#precos" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">{siteContent.heroContent.ctaSecondary}</Link>
          </div>
          <p className="mt-6 text-sm text-zinc-300">Equipamentos em excelente estado • Atendimento maravilhoso • Experiência incrível • Estrutura aprovada por quem já viveu a experiência.</p>
        </motion.div>
      </div>
    </section>
  );
}
