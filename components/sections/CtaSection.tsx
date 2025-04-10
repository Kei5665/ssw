import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-teal-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          「仕事が見つからない」「何から始めればいいかわからない」
        </h2>
        <p className="text-lg md:text-xl mb-8">
          そんなお悩み、一緒に解決します。<br className="hidden sm:block" />
          ぜひ一度、お話ししてみませんか？
        </p>
        <Link
          href="#"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="relative px-8 py-4">
             <span className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                 FREE
               </span>
               <span className="block text-xs font-semibold">簡単1分</span>
               <span className="block text-xl">LINEで相談</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection; 