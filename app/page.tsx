'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * This page handles requests to the basePath root (`/ssw`).
 * It immediately redirects the user to the default locale (`/ja`).
 */
export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // The Next.js router automatically prefixes this path with the basePath.
    // So, this will correctly redirect to `/ssw/ja`.
    router.replace('/ja');
  }, [router]);

  // Render a fallback while redirecting
  return <p>Redirecting to the default language...</p>;
} 