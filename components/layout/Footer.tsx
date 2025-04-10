import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-200 relative">
      {/* Optional: Add faint background image/svg here */}
       {/* <div className="absolute inset-0 opacity-10 z-0"> ... background graphic ... </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
             {/* Assuming logo.png is the correct image */}
            <Link href="/" className="flex items-center">
               <Image
                 src="/logo.png"
                 alt="RIDE JOB FOR SSW"
                 width={150}
                 height={50}
               />
             </Link>
          </div>

          {/* Company Info */}
          <div className="text-center md:text-left text-sm text-gray-600 space-y-1">
            <p className="font-semibold text-gray-800">株式会社 PM Agent</p>
            <p>〒150-0001</p>
            <p>東京都渋谷区神宮前1丁目9番地3</p>
            <p>原宿第３コーポ４０２号室</p>
            <p>Tel: 03-6824-7476</p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Company Link */}
            {/* TODO: Add actual link for companies */}
            <Link href="#" className="inline-block border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap">
              外国人ドライバーの採用を<br/>お考えの企業様へ
            </Link>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
               {/* TODO: Replace with actual SVG icons and links */}
              <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">F</Link>
              <Link href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">I</Link>
              <Link href="#" aria-label="TikTok" className="text-gray-500 hover:text-black">T</Link>
              <Link href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-600">Y</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4">
          ©{currentYear} PM Agent Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 