import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { workNavs } from "../../../Data";
import { workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
const Modal = React.lazy(() => import("../../common/modal/Modal"));

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);
  const [modalContent, setModalContent] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className='container' id='portfolio'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='PortfolioTitle'
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='buttons'
      >
        {workNavs.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}
            >
              {workNav}
            </button>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className='workImages'
      >
        {works.map((work) => {
          return (
            <div className='workImage' key={work.id}>
              <img src={work.img} alt='workImg' />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='hoverLayer'
              >
                {work.hasGit && (
                  <motion.a
                    // href='#'
                    onClick={() => {
                      openModal();
                      setModalContent(
                        <>
                          <h2>Modal Title {work.id}</h2>
                          <p>Modal content goes here...</p>
                        </>
                      );
                    }}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiGithub />
                  </motion.a>
                )}
                {work.hasView && (
                  <motion.a
                    href='#'
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiEye />
                  </motion.a>
                )}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default Portfolio;
