
import React from 'react';
import { motion } from 'framer-motion';

//import { AppWrap } from '../../wrapper';
import { images } from "../../constnts"
import './Header.scss';
import { AppWrap } from "../../wrapper"

import pdfFile  from "../../assets/filePdf/Sk.AlmamunAli_Cv.pdf"



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


const Header = () => {







  return (
    <div className="app__header app__flex app__backgroud">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ali</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">I’m a <span>full stack developer</span> , specialized in development of web applications using React, Next.js, Node.js & more </p>
            <a
              href={pdfFile}
              download="Sk.AlmamaunAli_Cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download Resume</button>
             
            </a>

          </div>
          {/*  */}

          <div >
           
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.Alibaba} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
};

//export default Header;
export default AppWrap(Header, 'home');