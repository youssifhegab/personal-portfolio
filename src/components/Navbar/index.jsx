import React, { useState, useEffect } from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from "../../Data";
import { socialIcons } from "../../Data";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.3,
      },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 20);
      });
    };
  }, []);
  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={scroll ? "header active" : "header"}
    >
      <div className='Nav_container'>
        <a className='logo' href='#home'>
          <h3>YH</h3>
        </a>
        <ul className='nav_links'>
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`#${navlink}`}>{navlink}</a>
              </li>
            );
          })}
        </ul>
        <div className='social_icons'>
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>;
          })}
        </div>
        <div
          className='menu'
          onClick={() => {
            setToggle(true);
          }}
        >
          <HiMenuAlt4 />
        </div>
        <motion.ul
          className='closeMenu'
          variants={menuVariants}
          initial='hidden'
          animate={toggle ? "visible" : "hidden"}
        ></motion.ul>

        <motion.div
          variants={navLinkVariants}
          initial='hidden'
          animate={toggle ? "visible" : "hidden"}
          className='menuX'
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {navLinks.map((navlink, index) => {
              return (
                <li key={index}>
                  <a href={`#${navlink}`} onClick={() => setToggle(false)}>
                    {navlink}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
