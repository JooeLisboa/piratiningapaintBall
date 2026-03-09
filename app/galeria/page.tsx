import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { GalleryPageContent } from '@/components/pages/GalleryPageContent';
import { FloatingWhatsAppButton } from '@/components/shared/FloatingWhatsAppButton';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: siteContent.seo.galleryTitle,
  description: siteContent.seo.galleryDescription
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryPageContent />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
