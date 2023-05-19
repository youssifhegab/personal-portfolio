import React from "react";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";

const Contact = () => {
  const [state] = useForm("mbjebwvq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className='container' id='contact'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='title'
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className='contact_form'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='contact_left_container'
        >
          <div>
            <h3>Get In Touch</h3>
            {contacts.map((contact) => {
              return (
                <div className='contact_left' key={contact.id}>
                  <div className='icon'>{contact.icon}</div>
                  <p>{contact.infoText}</p>
                </div>
              );
            })}
          </div>
          <div className='social_icons'>
            {socialIcons.map((socialIcon, index) => {
              return <div key={index}>{socialIcon}</div>;
            })}
          </div>
        </motion.div>
        <motion.form
          action='https://formspree.io/f/mbjebwvq'
          method='POST'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='contact_right'
        >
          <h3>Hire me!</h3>
          <div className='row'>
            <input type='text' name='firstName' placeholder='First Name' />
            <input type='text' name='lastName' placeholder='Last name' />
          </div>
          <div className='row'>
            <input type='text' name='phoneNumber' placeholder='Phone' />
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='row'>
            <textarea name='message' placeholder='message'></textarea>
          </div>
          <motion.button
            aria-label='Send email'
            disabled={state.submitting}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='btn'
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
