import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n03qq9l",
      "template_uuneali",
      form.current,
      "VyanvS5aHFTo4yilv"
    );

    e.target.reset();
  };
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:ajimauludin97@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5></h5>
            <a href="https://m.me/Aji.acm" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5></h5>
            <a
              href="https://api.whatsapp.com/send?phone+6281394945522"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
