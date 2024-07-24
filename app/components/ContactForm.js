"use client";

import Image from "next/image";
import "./ContactForm.css";
import { useState } from "react";
import { useToast, Input, Textarea, Button } from "@chakra-ui/react"; 

const initValues = {
  name: "",
  email: "",
  message: "",
};
const initState = { values: initValues, isLoading: false }; 

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading } = state;
  const toast = useToast(); 

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast({
        title: "Form submitted.",
        description: "We will get back to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <div className="container">
      <div className="form">
        <h1>
          <b>Contact Us</b>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="inputgroup">
            <Input
              isInvalid={touched.name && !values.name}
              type="text"
              required
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur} 
            />
            <label>Enter Your Name*</label>
          </div>
          <div className="inputgroup">
            <Input
              isInvalid={touched.email && !values.email}
              type="email" 
              required
              name="email" 
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} 
            />
            <label>Enter Your Email*</label>
          </div>
          <div className="inputgroup">
            <Textarea
              isInvalid={touched.message && !values.message}
              required
              name="message"
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur} 
            ></Textarea>
            <label>Write Your Message*</label>
          </div>
          <Button
            className="button"
            type="submit" 
            isLoading={isLoading} 
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
  );
}
