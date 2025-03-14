/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    newsletter: "no",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      newsletter: "no",
    }); // Reset form
  };

  return (
    <center>
      <div className="contact-head">
        <h2>Contact Me</h2>
        <p>Connect</p>
      </div>
      <div className="contact-form-container" id="contact">
        <h2>Get in touch</h2>
        <p>
          For more information about fees and availability, drop me a line,
          connect with me at the social media links,
          <strong>Linkedin,Instagram,Email</strong>.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-left">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-right">
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div></div>
        </form>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
      <footer className="footer">
      <p>&copy; Yashwanth Raju S. All rights reserved.</p>
    </footer>
    </center>
  );
};

export default Contact;
