'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '@/data/siteContent';

export function MobileMenu({ open, items, onClose }: { open: boolean; items: NavItem[]; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t border-white/10 bg-tactical-900 md:hidden"
        >
          <nav className="container-max grid gap-2 py-4">
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="rounded-lg px-3 py-2 text-base font-medium hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
