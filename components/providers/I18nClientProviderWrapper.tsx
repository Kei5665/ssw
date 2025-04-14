'use client';

import { ReactNode } from 'react';
import { I18nProviderClient } from '@/locales/client';

export default function I18nClientProviderWrapper({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
} 