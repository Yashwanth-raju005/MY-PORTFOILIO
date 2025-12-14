/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__header">
        <h2>Contact Me</h2>
        <p>Let’s build something meaningful together</p>
      </div>

      <div className="contact__container">
        <div className="contact__intro">
          <h3>Get in Touch</h3>
          <p>
            Have a project, opportunity, or idea in mind?  
            Feel free to reach out — I’m always open to discussing new
            challenges, collaborations, and learning opportunities.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact__btn">
            Send Message
          </button>
        </form>
      </div>

      <footer className="contact__footer">
        <p>© Yashwanth Raju S. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
