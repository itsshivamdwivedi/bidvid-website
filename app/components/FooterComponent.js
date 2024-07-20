import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-900 text-white h-32 flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
                <img src="/logoblack.png" alt="BidVid Logo" className="h-10" />
                <div className="flex space-x-4">
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
