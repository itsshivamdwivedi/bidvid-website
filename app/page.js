'use client';

import React from 'react';

import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FooterComponent from './components/FooterComponent';
import './components/ContactForm.css';
import Contact from "./contact/page";
import Head from 'next/head';

export default function Page() {
  const seoData = {
    title: 'BidVids: Revolutionising Bidding with AI-Powered Optimisation',
    description: 'BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly.',
    ogTitle: 'BidVids: Revolutionising Bidding with AI-Powered Optimisation',
    ogDescription: 'BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly.',
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
      </Head>
      <HeroSection />
      <Services />
      <Benefits />
      <Contact />
      <FooterComponent />
    </>
  );
}
