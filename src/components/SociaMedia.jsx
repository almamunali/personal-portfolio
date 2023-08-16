
import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {FaLinkedin,FaFreeCodeCamp} from "react-icons/fa"

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a  href="https://www.linkedin.com/in/sk-almamun-ali-1b9aa1229/">
      <FaLinkedin/>
      </a>
   
    </div>
    <div>
      <a href="https://www.freecodecamp.org/Almamunali">
      <FaFreeCodeCamp/>
      </a>
   
    </div>
    {/* <div>
      <BsTwitter />
    </div> */}
     <div>
      <a href="https://www.facebook.com/skrony.ali.7">
      <FaFacebookF />
      </a>
     
    </div>
    {/*
    <div>
      <BsInstagram />
    </div> */}
    
  </div>
);

export default SocialMedia;