import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center lg:ml-12 "> {/* Added padding-left for large screens */}
        <ExportedImage src="/logo.png" alt="BidVid Logo" width={102} height={49} />
      </div>
      <div className="space-x-4 lg:pr-6"> {/* Added padding-right for large screens */}
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