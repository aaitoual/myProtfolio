import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import "./Contact.css";

function Contact({ setInview }) {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setVisible(true);
      setInview("Contact");
    }
  }, [inView, setInview]);

  return (
    <div id="Contact" ref={ref} className={"app__contact"}>
      CONTACT
      <div className="info">You can contact me on <span>aaitoual.tsuki@gmail.com</span> or my mobile <span>+212648608002</span> or using the following form :</div>
    </div>
  );
}

export default Contact;
