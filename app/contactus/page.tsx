"use client";
import Formchallenge from "@/components/security/Formchallenge";
import React, { useState } from "react";
import { toast } from "react-toastify";



export default function Contact() {
  let [captchasolved, setCaptchasolved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // save or send this data to the admin 

    /// check every field is filled and valid 
    if (formData.name === "") {
      toast.error("Please enter your name");
      return;
    }
    if (formData.email === "") {
      toast.error("Please enter your email");
      return;
    }
    if (formData.message === "") {
      toast.error("Please enter your message");
      return;
    }
    // check if the email is valid
    const is_email_valid = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!is_email_valid) {
      toast.error("Please enter a valid email");
      return;
    }
    // check if the message is valid
    if (formData.message.length < 10) {
      toast.error("Please enter a valid message");
      return;
    }
    // check if the name is valid
    if (formData.name.length < 3) {
      toast.error("Please enter a valid name");
      return;
    }
    // check if the captcha is solved
    if (!captchasolved) {
      toast.error("Please solve the captcha");
      return;
    }
    // send the data to the admin
    toast.info("your message should be sent but this feature is not available yet luuqad.com is still under development");

   
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        
        {/* Contact Form */}
        <form
          className="w-4/5 md:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 mb-4 leading-tight border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-4 leading-tight border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
            id="email"
            type=""
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            
          />

          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 mb-4 leading-tight border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            
          />
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
          >
          <Formchallenge
            setCaptchasolved={setCaptchasolved}
           />

          </div>
         
          <button
            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            type="submit"
          >
            Send
          </button>
        </form>
        {/* End of Contact Form */}
      </div>
      {/* End of Contact Section */}
    </div>
  );
}
