'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/shared/Badge';
import { siteContent } from '@/data/siteContent';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function HeroSection() {
  return (
    <section id="arena-paintball" className="relative overflow-hidden py-24 md:py-32">
      <Image src={siteContent.heroContent.image} alt="Arena de paintball" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
      <div className="absolute inset-0 bg-noise" />
      <div className="container-max relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="relative mb-6 h-16 w-72 md:h-20 md:w-80">
            <Image src={siteContent.logo} alt="Logo Arena Paintball" fill className="object-contain object-left" priority />
          </div>
          <Badge>{siteContent.heroContent.social.rating} • {siteContent.heroContent.social.reviews}</Badge>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] md:text-6xl">{siteContent.heroContent.title}</h1>
          <p className="mt-5 text-lg text-brand-muted">{siteContent.heroContent.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')} target="_blank" rel="noopener noreferrer" className="btn-primary shadow-brand">
              {siteContent.heroContent.ctaPrimary}
            </a>
            <Link href="/#precos" className="btn-secondary">{siteContent.heroContent.ctaSecondary}</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
