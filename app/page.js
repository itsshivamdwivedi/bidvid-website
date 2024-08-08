'use client';

import React, { useState } from 'react';

import { Input, Textarea, Button } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FooterComponent from './components/FooterComponent';
import './components/ContactForm.css';
import Contact from "./contact/page";
import Head from 'next/head';

export default function Page(){
  return (
    <>
     <Head>
        <title>BidVids: Revolutionising Bidding with AI-Powered Optimisation</title>
        <meta name="description" content="BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly." />
        <meta property="og:title" content="BidVids: Revolutionising Bidding with AI-Powered Optimisation" />
        <meta property="og:description" content="BidVids is a cutting-edge ad technology platform that uses advanced AI algorithms to optimise advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly." />
      
      </Head>
      <HeroSection />
      <Services />
      <Benefits />
      <Contact />
      <FooterComponent />
    </>
  );

}

