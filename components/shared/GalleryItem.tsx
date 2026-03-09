'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryImage } from '@/data/siteContent';

export function GalleryItem({ item, onClick }: { item: GalleryImage; onClick: () => void }) {
  return (
    <motion.button onClick={onClick} className="group relative overflow-hidden rounded-xl text-left" whileHover={{ y: -4 }}>
      <Image src={item.src} alt={item.alt} width={800} height={600} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <p className="absolute bottom-3 left-3 text-sm font-semibold">{item.title ?? item.alt}</p>
    </motion.button>
  );
}
