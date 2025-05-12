'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();
  const hash = useSearchParams().get('#');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const id = window.location.hash?.replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [pathname]);

  return null;
}