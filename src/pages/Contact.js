import "../styles/Contact.css";

import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="row">
        <div className="image">
          <img src="images/book-img.svg" alt="" />
        </div>
        <form action="">
          <input type="text" placeholder="your name" className="box" />
          <input type="text" placeholder="your email" className="box" />
          <input type="submit" value="book now" className="btn" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
