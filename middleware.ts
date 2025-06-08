import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['ja', 'en', 'zh'],
  defaultLocale: 'ja',
  // urlMappingStrategy: 'rewrite',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized.
  // Try a broader exclusion for static assets.
  matcher: ['/ssw', '/ssw/((?!api|_next|.*\\..*).*)'],
}; 