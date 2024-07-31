"use client";

import React from "react";
import Link from "next/link";
import "../components/ContactForm.css";
import ExportedImage from "next-image-export-optimizer";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name").trim();
    const number = formData.get("number").trim();
    const message = formData.get("message").trim();

    if (!name || !number || !message) {
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
      console.log(responseData["message"]);

      alert("Message successfully sent");
      event.target.reset();
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="container">
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
              required
            />
            <label htmlFor="form-number">Enter Your Number*</label>
          </div>
          <div className="inputgroup">
            <textarea
              id="form-message"
              name="message"
              rows={5}
              className="text-black p-2 border rounded"
              required
            />
            <label htmlFor="form-message">Write Your Message</label>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <div className="call">
          <span>
            <ExportedImage src="/call1.png" width="28px" alt="call" />
          </span>
          <span className="number">9635462536</span>
        </div>
        <div className="gmail">
          <span>
            <ExportedImage src="/mail1.png" width="28px" alt="email" />
          </span>
          <span className="email">support.sugarlogger@gmail.com</span>
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
