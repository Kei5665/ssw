'use client';

import Image from 'next/image';
import CtaSection from './CtaSection';
import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import localeEn from '@/locales/en';
import localeJa from '@/locales/ja';
import localeZh from '@/locales/zh';

// Map locale strings to the imported objects
const locales = {
  en: localeEn,
  ja: localeJa,
  zh: localeZh,
};

const TaxiCompanyFeatures = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object
  const locale = locales[currentLocale as keyof typeof locales] || localeJa;

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  // Get features from the selected locale
  const companyFeatures = locale.taxiCompanyFeatures.items;

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            {locale.taxiCompanyFeatures.sectionTitleLine1}
            <br className="sm:hidden" />
            {locale.taxiCompanyFeatures.sectionTitleLine2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default TaxiCompanyFeatures; 