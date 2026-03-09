import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NoticesPageContent } from '@/components/pages/NoticesPageContent';
import { FloatingWhatsAppButton } from '@/components/shared/FloatingWhatsAppButton';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: siteContent.seo.noticesTitle,
  description: siteContent.seo.noticesDescription
};

export default function NoticesPage() {
  return (
    <>
      <Header />
      <NoticesPageContent />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
