"use client";

import React, { useState, useEffect } from "react";
import "../components/ContactForm.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    number: "", 
    message: "",
  });

  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const { name, number, message } = formState;
    if (name.trim() && number.trim() && message.trim()) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [formState]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateName = (event) => {
    const { value } = event.target;
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      alert("Name should contain only alphabets");
      setFormState({ ...formState, name: "" });
    }
  };

  const validateNumber = (event) => {
    const { value } = event.target;
    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      alert("Please enter numbers only");
      setFormState({ ...formState, number: "" });
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, number, message } = formState;

    if (!name.trim() || !number.trim() || !message.trim()) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, number, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("Error: Could not send message.");
        throw new Error(`Response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData.message);

      alert("Message successfully sent");
      setFormState({ name: "", number: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="container" id="contact-us">
      <div className="form">
        <h1>
          <b>Contact Us</b>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              id="form-name"
              autoComplete="name"
              maxLength={50}
              name="name"
              type="text"
              value={formState.name}
              onChange={handleInputChange}
              onBlur={validateName}
              required
            />
            <label htmlFor="form-name">Enter Your Name*</label>
          </div>
          <div className="inputgroup">
            <input
              id="form-number"
              autoComplete="tel"
              maxLength={15}
              name="number"
              type="tel"
              value={formState.number}
              onChange={handleInputChange}
              onBlur={validateNumber}
              required
            />
            <label htmlFor="form-number">Enter Your Number*</label>
          </div>
          <div className="inputgroup">
            <textarea
              id="form-message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="form-message">Write Your Message</label>
          </div>
          <button
            className="button"
            type="submit"
            disabled={!isButtonActive}
            style={{
              backgroundColor: isButtonActive ? "darkblue" : "grey",
            }}
          >
            Submit
          </button>
        </form>
        <div className="call">
          <span>
            <img src="/call1.png" width="28px" alt="call" />
          </span>
          <span className="number">
            <a href="tel:9930451078">9930451078</a>
          </span>
        </div>
        <div className="gmail">
          <span>
            <img src="/mail1.png" width="28px" alt="email" />
          </span>
          <span className="email">
            <a href="mailto:support.sugarlogger@gmail.com" target="_blank">
              support.sugarlogger@gmail.com
            </a>
          </span>
        </div>
      </div>
      <div className="image">
        <ExportedImage
          src="/contact-robot.png"
          layout="fixed"
          width={700}
          height={400}
          alt="robot"
        />
      </div>
    </div>
  );
}
