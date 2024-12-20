import React from "react";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col">
       <Navbar />   
    <section className="bg-base-100">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 text-center text-neutral-content text-lg">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Your email</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@flowbite.com"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="subject" className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text">Your message</span>
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Leave a comment..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Send message
          </button>
        </form>
      </div>
    </section>
    </main>
  );
};

export default Contact;