import React from "react";
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
        </div>
      </div>

      {/* Contact Form */}
      
      <div className="card shadow-sm p-4 mt-4">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter the subject"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
