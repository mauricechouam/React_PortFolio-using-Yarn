import React from 'react';
import '../styles/Contact.css';  // Importing the component-specific styles for Contact

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out using the form below!</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
