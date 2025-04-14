'use client'; // Mark this layout as a Client Component

import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import I18nClientProviderWrapper from '@/components/providers/I18nClientProviderWrapper';
import { useCurrentLocale } from '@/locales/client'; // Import the client hook

// Removed generateStaticParams as it conflicts with 'use client'
// export function generateStaticParams() {
//  return ['en', 'ja', 'zh'].map(locale => ({ locale }));
// }

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = useCurrentLocale(); // Get locale using the client hook

  // console.log no longer needed as it runs client-side now
  // console.log('[app/[locale]/layout.tsx] Received locale param:', locale);
  // Return the provider wrapping the layout elements, without html/body tags
  return (
    <I18nClientProviderWrapper locale={locale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </I18nClientProviderWrapper>
  );
} 