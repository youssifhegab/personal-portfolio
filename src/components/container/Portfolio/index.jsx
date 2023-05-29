import React, { useEffect, useState } from "react";
import "./styles.scss";
import { workNavs } from "../../../Data";
import { workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import CarouselComponent from "../../common/carousel";

const Modal = React.lazy(() => import("../../common/modal"));

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);
  const [carouselImages, setCarouselImages] = useState();

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

  console.log({ works });

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
              aria-label='switch tabs'
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
            <div className='work' key={work.id}>
              <div className='workImage'>
                <img
                  src={work.img}
                  alt='workImg'
                  loading='lazy'
                  style={{ objectFit: "contain" }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className='hoverLayer'
                >
                  {!!work?.githubLink && (
                    <motion.button
                      aria-label='View github'
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiGithub />
                    </motion.button>
                  )}
                  {work?.workImages?.length > 0 && (
                    <motion.button
                      aria-label='view more images'
                      onClick={() => {
                        openModal();
                        setCarouselImages(work.workImages);
                      }}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiEye />
                    </motion.button>
                  )}
                  {!!work?.link && (
                    <motion.button
                      aria-label='view link'
                      onClick={() => window.open(work.link, "_blank")}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <AiOutlineLink />
                    </motion.button>
                  )}
                </motion.div>
              </div>
              <h3>{work.name}</h3>
            </div>
          );
        })}
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CarouselComponent images={carouselImages} />
      </Modal>
    </div>
  );
};

export default Portfolio;
