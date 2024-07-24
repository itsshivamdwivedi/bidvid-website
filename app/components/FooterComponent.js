import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-900 text-white h-32 flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
                <img 
                    src="/logo-bg-removed.png" 
                    alt="BidVid logo" 
                    className="lg:w-28 lg:ml-4  h-auto md:w-40 md:h-auto  xl:ml-24 2xl:ml-28" // Adjusted size for mobile and larger screens
                /> 
                <div className="flex space-x-4 lg:pr-4"> 
                    <a href="#" className="hidden md:inline hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">About Us</a>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-center">Copyright@BidVid</p>
            </div>
        </footer>
    );
}

export default FooterComponent;
