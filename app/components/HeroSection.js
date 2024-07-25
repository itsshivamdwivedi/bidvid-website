"use client";

import { useState, useEffect } from 'react';
import './HeroSection.css';
import React from 'react';
// import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='hero-container'>
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Revolutionizing Bidding with</h1>
                <h1 className="hero-subtitle">AI-Powered Optimization</h1>
                <p className="hero-description">
                    BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms 
                    to optimise advertising yield for digital media buyers. Boost revenue and enhance 
                    user experience seamlessly.
                </p>
                <button className="hero-button">Contact Us</button>
            </div>
            <div className="hero-image-container">
                <ExportedImage
                    src={isMobile ? "/mobile-banner.png" : "/banner.png"} 
                    alt="Robot Hand" 
                    className="hero-image"
                    width={isMobile ? 500 : 800}
                    height={isMobile ? 300 : 450} 
                />
            </div>
        </div>
        </div>
    );
}

export default HeroSection;