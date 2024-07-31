import AboutUs from '../components/AboutUs'
import React from 'react';
import Link from 'next/link';
import FooterComponent from '../components/FooterComponent'
import Contact from '../contact/page'

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <Contact />
      <FooterComponent />
    </>
  );
}
