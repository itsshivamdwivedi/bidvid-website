import ExportedImage from 'next-image-export-optimizer';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center nav-bar">
      <div className="flex items-center  "> 
        <ExportedImage src="/logo.png" alt="BidVid Logo" width={141} height={86} />
      </div>
      <div className="space-x-4 lg:pr-6"> 
        <Link href="/about" legacyBehavior>
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