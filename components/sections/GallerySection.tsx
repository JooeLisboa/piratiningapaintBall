'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { GalleryItem } from '@/components/shared/GalleryItem';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <AnimatedSection id="galeria-de-fotos" className="container-max py-16">
      <SectionTitle title="Galeria de Fotos" description="Imagens placeholder configuradas via data/siteContent.ts para facilitar a troca por fotos reais da arena." />
      <div className="grid gap-4 sm:grid-cols-2">
        {siteContent.galleryImages.map((image, index) => <GalleryItem key={image.src} item={image} onClick={() => setActiveIndex(index)} />)}
      </div>
      {activeIndex !== null ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <button onClick={() => setActiveIndex(null)} aria-label="Fechar galeria" className="absolute right-4 top-4 rounded-full bg-white/20 p-2"><X /></button>
          <Image src={siteContent.galleryImages[activeIndex].src} alt={siteContent.galleryImages[activeIndex].alt} width={1200} height={800} className="max-h-[85vh] w-auto rounded-xl object-contain" />
        </div>
      ) : null}
    </AnimatedSection>
  );
}
