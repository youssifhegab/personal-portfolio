import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='modal-overlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='modal-content'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <motion.button
              aria-label='close modal'
              onClick={onClose}
              className='modal-close'
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <AiFillCloseCircle />
            </motion.button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
