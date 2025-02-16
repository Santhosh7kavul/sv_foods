/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 w-full max-w-4xl">
        <div className="flex flex-col items-center bg-primary shadow-md p-8 rounded-lg ">
          <Mail className="w-12 h-12 text-black bg-white rounded-full p-2 shadow-md mb-3 overflow-visible" />
          <h2 className="text-xl font-bold text-gold">Mail Us</h2>
          <p className="text-lg text-white font-medium">info@cornrichsilage.in</p>
        </div>

        <div className="flex flex-col items-center bg-primary shadow-md p-8 rounded-lg">
          <MapPin className="w-12 h-12 text-black bg-white rounded-full p-2 shadow-md mb-3 overflow-visible" />
          <h2 className="text-xl font-bold text-gold">Location</h2>
          <p className="text-lg text-white font-medium">Kellode, Hosadurga</p>
        </div>

        <div className="md:col-span-2 flex flex-col items-center justify-center bg-primary shadow-md p-8 rounded-lg ">
          <Phone className="w-12 h-12 text-black bg-white rounded-full p-2 overflow-visible shadow-md mb-3" />
          <h2 className="text-xl font-bold text-gold">Call Us</h2>
          <p className="text-lg text-white font-medium">+91-8105643121</p>
        </div>
      </div>

      <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl w-full">
        <h1 className="text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-6">
          Message Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              className="w-full p-3 border rounded-lg border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded-lg border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full p-3 border rounded-lg border-gold focus:outline-none focus:ring-2 focus:ring-gold"
            onChange={handleChange}
          ></textarea>
          
         
          <div className="flex justify-center ">
            <button
              type="submit"
              className="flex items-center justify-center bg-gold text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition gap-2"
            >
           <Send className="ml-2 text-black" />   SUBMIT 
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}