'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Input, Textarea, Button } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FooterComponent from './components/FooterComponent';
import './components/ContactForm.css';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import Contact from "./contact/page";

export default function Page(){
  return (
    <>
      <HeroSection />
      <Services />
      <Benefits />
      <Contact />
      <FooterComponent />
    </>
  );

}

