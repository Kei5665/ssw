'use client'; // Add this directive for client-side interactivity

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import Slider from "react-slick"; // Import Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react'; // Import useEffect and useState
import { useI18n } from '@/locales/client'; // Import the hook

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const t = useI18n(); // Initialize the hook

  useEffect(() => {
    setIsClient(true); // Indicate component has mounted on the client
  }, []);

  const settings = {
    dots: true,       // Show dots navigation
    infinite: true,   // Loop slides
    speed: 500,       // Transition speed
    slidesToShow: 1,   // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,    // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    arrows: false,     // Hide arrows
    pauseOnHover: true, // Pause autoplay on hover
  };

  // Sample image data - replace with your actual images and potentially alt texts
  const slideImages = [
    { src: '/hero-slide-1.png', altKey: 'hero.slide1Alt' }, // Example using translation key
    { src: '/hero-slide-2.png', altKey: 'hero.slide2Alt' },
  ];
  const desktopBg = { src: '/hero-background.png', altKey: 'hero.desktopBgAlt' };

  return (
    <section className="relative text-white overflow-hidden"> {/* Removed padding, background styles */}

      {/* Slider for mobile/tablet */}
      <div className="md:hidden">
        {isClient && ( // Only render Slider on the client-side
          <Slider {...settings}>
            {slideImages.map((image, index) => (
              <div key={index} className="relative w-full h-[60vh]"> {/* Adjust height as needed */}
                <Image
                  src={image.src}
                  // @ts-ignore - Assuming t function handles missing keys gracefully or keys are guaranteed to exist
                  alt={t(image.altKey) || `Hero image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                 <div className="absolute inset-0 bg-black opacity-40"></div> {/* Added overlay per slide */}
              </div>
            ))}
          </Slider>
        )}
      </div>

       {/* Static image for desktop */}
       <div className="hidden md:block relative w-full h-[70vh]"> {/* Adjust height as needed */}
          <Image
              src={desktopBg.src}
              // @ts-ignore
              alt={t(desktopBg.altKey) || "Hero background"}
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Desktop overlay */}
      </div>


      {/* Text Content and Button - Positioned absolutely over the background/slider */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start z-10"> {/* Centered on mobile, left on desktop */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-none md:max-w-4xl text-center md:text-left"> {/* Increased max-width on md+ screens */}
            {/* Main Catchphrase */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"> {/* Adjusted PC text sizes down */}
              {/* @ts-ignore */}
              {t('hero.title.line1')}
              <br />
              {/* @ts-ignore */}
              {t('hero.title.line2')}
            </h1>
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-8"> {/* Adjusted PC text sizes down */}
              {/* @ts-ignore */}
              {t('hero.subtitle')}
            </p>
            {/* LINE Button */}
            <Link
              href="https://lin.ee/aHr6WDJ" // Updated LINE link
              target="_blank" rel="noopener noreferrer" // Added for external link
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="relative px-8 py-4 sm:px-10 sm:py-5"> {/* Increased padding */}
                {/* "FREE" Badge */}
                <span className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                  {/* @ts-ignore */}
                  {t('hero.freeBadge')}
                </span>
                {/* Button Text */}
                <span className="block text-sm sm:text-base font-semibold">{t('hero.button.line1')}</span> {/* Corrected translation */}
                <span className="block text-xl sm:text-2xl">{t('hero.button.line2')}</span> {/* Corrected translation */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 