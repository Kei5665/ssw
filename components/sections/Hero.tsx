import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-48"
      // Placeholder background image - Add your image to /public/hero-background.png
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-none md:max-w-3xl text-left">
           {/* Main Catchphrase */}
           <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
             仕事も、暮らしも。<br className="md:hidden" />
             ニッポンで手に入れる。
           </h1>
           {/* Subtitle */}
           <p className="text-2xl md:text-3xl mb-8">
             【特定技能合格者向け】タクシードライバーの求人紹介
           </p>
           {/* LINE Button */}
           <Link
             href="#" // Replace with your actual LINE link
             className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
           >
             <div className="relative px-8 py-4">
               {/* "FREE" Badge */}
               <span className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                 FREE
               </span>
               {/* Button Text */}
               <span className="block text-xs font-semibold">簡単1分</span>
               <span className="block text-xl">LINEで相談</span>
             </div>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 