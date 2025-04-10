import Image from 'next/image';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ProblemAppeal from '@/components/sections/ProblemAppeal';
import ServiceOverview from '@/components/sections/ServiceOverview';
import ServiceFeatures from '@/components/sections/ServiceFeatures';
import CtaSection from '@/components/sections/CtaSection';
import Testimonials from '@/components/sections/Testimonials';
import Steps from '@/components/sections/Steps';
import TaxiCompanyFeatures from '@/components/sections/TaxiCompanyFeatures';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Problem Appeal Section */}
        <ProblemAppeal />

        {/* Service Overview Section */}
        <ServiceOverview />

        {/* Service Features Section */}
        <ServiceFeatures />

        {/* CTA Section */}
        <CtaSection />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Steps Section */}
        <Steps />

        {/* Taxi Company Features Section */}
        <TaxiCompanyFeatures />

        {/* FAQ Section */}
        <Faq />

        {/* Final CTA Section (reusing CtaSection) */}
        <CtaSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}