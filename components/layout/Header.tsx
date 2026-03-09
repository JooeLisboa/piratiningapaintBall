"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { headerNavItems, siteContent } from "@/data/siteContent";
import { MobileMenu } from "./MobileMenu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/86 backdrop-blur-2xl border-b border-brand-primary/25"
          : "bg-black/55 backdrop-blur-lg",
      )}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary/70 to-transparent" />
      <div className="container-max flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={siteContent.logo}
            alt={siteContent.brand}
            width={56}
            height={56}
            className="h-18 w-auto md:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-brand-muted transition hover:bg-white/10 hover:text-brand-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <motion.a
          href={buildWhatsAppUrl(
            "Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden btn-primary shadow-brand md:inline-flex"
        >
          <MessageCircle size={16} className="mr-2" />
          Agendar pelo WhatsApp
        </motion.a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-lg border border-white/20 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <MobileMenu
        open={open}
        items={headerNavItems}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}
