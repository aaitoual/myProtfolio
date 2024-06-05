import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import env from "react-dotenv";
import { YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID } from "../../constants/env.tsx";

function Contact({ setInview }) {
  // dotenv.config();
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log("----", YOUR_PUBLIC_KEY)
    console.log("----", YOUR_SERVICE_ID)
    console.log("----", YOUR_TEMPLATE_ID)
    if (inView) {
      setVisible(true);
      setInview("Contact");
    }
  }, [inView, setInview]);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        { publicKey: YOUR_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an error sending the email. Please try again later.');
        }
      );
  };


  return (
    <div id="Contact" ref={ref} className={"app__contact"}>
      CONTACT
      <div className="info">
        You can contact me on my e-mail <span>aaitoual.tsuki@gmail.com</span> or
        my mobile <span>+212648608002</span> or using the following form :
      </div>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
