import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({ isOpen, onClose, modalContent }) => {
  const { workImages } = modalContent || {};
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
              onClick={onClose}
              className='modal-close'
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <AiFillCloseCircle />
            </motion.button>
            <div className='carousel-container'>
              <Carousel
                autoPlay
                dynamicHeight={false}
                infiniteLoop
                showThumbs={false}
                showArrows={true}
                showStatus={false}
              >
                {workImages?.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.image}
                      alt='work'
                      className='carousel-image'
                      loading='lazy'
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
