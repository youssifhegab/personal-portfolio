import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ isOpen, onClose, modalContent }) => {
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
            <AiFillCloseCircle onClick={onClose} className='modal-close' />
            {modalContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
