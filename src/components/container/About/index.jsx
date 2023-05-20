import React from "react";
import "./styles.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/image2.webp";
const About = () => {
  return (
    <div className='container ' id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='title'
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className='about_container'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='about_left'
        >
          <img src={portfolio} alt='profile' loading='lazy' />
        </motion.div>
        <motion.div
          className='about_right'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4>
            Experienced in building high-performance web applications, with over
            2 years of hands-on experience. Proficient in Reactjs and Nextjs.
            Developed several complex web applications and helped achieve an
            increase in page speed, improve user engagement, and enhanced SEO, I
            did some projects using Ruby on rails
          </h4>
          <div>
            {bios.map((bio) => {
              return (
                <div className='bio' key={bio.id}>
                  <span className='bioKey'>
                    {bio.icon}
                    {bio.key}
                  </span>
                  <span className='bioValue'>{bio.value}</span>
                </div>
              );
            })}
          </div>
          <motion.a
            href={import.meta.env.VITE_APP_RESUME}
            target='_blank'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
