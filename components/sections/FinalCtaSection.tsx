'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { siteContent } from '@/data/siteContent';

export function FinalCtaSection() {
  return (
    <section className="container-max pb-20 pt-8">
      <motion.div className="card-surface overflow-hidden p-8 text-center" animate={{ boxShadow: ['0 0 0 rgba(255,106,0,0)', '0 0 52px rgba(255,106,0,0.24)', '0 0 0 rgba(255,106,0,0)'] }} transition={{ duration: 3, repeat: Infinity }}>
        <div className="relative mx-auto mb-4 h-12 w-56"><Image src={siteContent.logo} alt="Logo Arena Paintball" fill className="object-contain" /></div>
        <h2 className="text-3xl font-black">Pronto para viver uma experiência memorável?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-brand-muted">Reúna sua turma e faça seu agendamento via WhatsApp em poucos cliques.</p>
        <a href={buildWhatsAppUrl('Olá! Quero agendar minha partida na Arena Paintball - Piratininga PaintBall.')} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 shadow-brand">Agendar pelo WhatsApp</a>
      </motion.div>
    </section>
  );
}
