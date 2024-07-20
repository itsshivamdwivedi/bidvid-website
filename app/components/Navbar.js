import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="BidVid Logo" width={120} height={40} />
      </div>
      <div className="space-x-4">
        <Link href="#about-us" legacyBehavior>
          <a className="text-gray-800 hover:text-blue-600">About Us</a>
        </Link>
        <Link href="#contact-us" legacyBehavior>
          <a className="hidden md:inline text-gray-800 hover:text-blue-600">Contact Us</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
