import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import ProblemAppeal from '@/components/sections/ProblemAppeal';
import ServiceOverview from '@/components/sections/ServiceOverview';
import ServiceFeatures from '@/components/sections/ServiceFeatures';
import CtaSection from '@/components/sections/CtaSection';
import Testimonials from '@/components/sections/Testimonials';
import Steps from '@/components/sections/Steps';
import TaxiCompanyFeatures from '@/components/sections/TaxiCompanyFeatures';
import Faq from '@/components/sections/Faq';

export const metadata: Metadata = {
  title: '特定技能向けタクシードライバー求人 - RIDE JOB FOR SSW トップ',
  description: 'RIDE JOB FOR SSWで、あなたのスキルに合ったタクシードライバーの仕事を見つけよう。特定技能ビザ保持者を全力サポート。',
};

export default function LandingPage() {
  return (
    <>
      <Hero />

      <ProblemAppeal />

      <ServiceOverview />

      <ServiceFeatures />

      <CtaSection />

      <Testimonials />

      <Steps />

      <TaxiCompanyFeatures />

      <Faq />
    </>
  );
} 