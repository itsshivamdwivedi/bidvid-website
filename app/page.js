"use client";

import React from 'react';
import Image from 'next/image';
import { Input, Textarea, Button } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FooterComponent from './components/FooterComponent';
import './components/ContactForm.css';

const Page = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Benefits />

      <div className="container">
        <div className="form">
          <h1>
            <b>Contact Us</b>
          </h1>

          <form>
            <div className="inputgroup">
              <Input
                type="text"
                required
                name="name"
                errorBorderColor="red.300"
              />
              <label>Enter Your Name*</label>
            </div>
            <div className="inputgroup">
              <Input
                type="email"
                required
                name="email"
                errorBorderColor="red.300"
              />
              <label>Enter Your Email*</label>
            </div>
            <div className="inputgroup">
              <Textarea
                required
                name="message"
                errorBorderColor="red.300"
              ></Textarea>
              <label>Write Your Message*</label>
            </div>
            <Button
              className="button"
              type="submit"
              colorScheme="blue"
              mt={4}
            >
              Submit
            </Button>
          </form>
          <div className="call">
            <span>
              <img src="/call.webp" width="58px" alt="call" />
            </span>
            <span className="number">9635462536</span>
          </div>
          <div className="gmail">
            <span>
              <img src="/email.webp" width="58px" alt="email" />
            </span>
            <span className="email">support.sugarloger@gmail.com</span>
          </div>
        </div>
        <div className="image">
          <Image
            src="/robot.png"
            layout="fixed"
            width={700}
            height={400}
            alt="robot"
          />
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default Page;
