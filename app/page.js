"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import { Input, Textarea, Button } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FooterComponent from './components/FooterComponent';
import './components/ContactForm.css';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log('Sending data:', formData);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response received:', response);

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.error || 'Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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

          <form onSubmit={handleSubmit}>
            <div className="inputgroup">
              <Input
                type="text"
                required
                name="name"
                errorBorderColor="red.300"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Enter Your Name*</label>
            </div>
            <div className="inputgroup">
              <Input
                type="email"
                required
                name="email"
                errorBorderColor="red.300"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Enter Your Email*</label>
            </div>
            <div className="inputgroup">
              <Textarea
                required
                name="message"
                errorBorderColor="red.300"
                value={formData.message}
                onChange={handleChange}
              ></Textarea>
              <label>Write Your Message*</label>
            </div>
            <Button
              className="button"
              type="submit"
              colorScheme="blue"
              mt={4}
              isLoading={isLoading} 
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
