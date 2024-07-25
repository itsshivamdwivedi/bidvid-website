import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-900 text-white h-32 md:h-auto flex flex-col justify-between p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <img 
                    src="/logo-bg-removed.png" 
                    alt="BidVid logo" 
                    className="w-20 h-auto mb-4 md:mb-0 md:w-28 md:ml-4 lg:w-40 lg:ml-24 xl:ml-28" 
                />
                <div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
                    <a href="#" className="hidden md:inline hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">About Us</a>
                </div>
            </div>
            <div className="flex justify-center mt-2 md:mt-4">
                <p className="text-center">Copyright @ BidVid</p>
            </div>
        </footer>
    );
}

export default FooterComponent;
