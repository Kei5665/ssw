import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png" // Use logo.png from public directory
              alt="RIDE JOB FOR SSW" // Updated alt text
              width={120}  // Adjusted width
              height={40} // Adjusted height
              priority // Add priority if logo is above the fold
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Navigation Links (Placeholder IDs for now) */}
          <Link href="#service" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            サービスの内容
          </Link>
          <Link href="#flow" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            就職までの流れ
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            よくある質問
          </Link>
          {/* Language Switch Placeholder */}
          <button className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-teal-600">
            LANGUAGE
          </button>
          {/* Line Button Placeholder (Needs specific LINE link) */}
          <Link href="#" className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600">
            LINEで問い合わせ
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder for future implementation) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="メニューを開く">
            {/* Hamburger Icon SVG */}
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu (Placeholder for future implementation) */}
      {/* <div className="md:hidden"> ... Mobile menu content ... </div> */}
    </header>
  );
};

export default Header; 