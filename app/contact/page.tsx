"use client"
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <>
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="bg-base-100">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold text-center">Contact Me</h2>
          <p className="mb-8 lg:mb-16 text-center text-neutral-400 text-lg">
            Want to connect with me? Discuss more  
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Your email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@gmail.com"
                className="input input-bordered w-full"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="subject" className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Let me know how I can help you"
                className="input input-bordered w-full"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text">Your message</span>
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Message for me...."
                className="textarea textarea-bordered w-full"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Contact;
