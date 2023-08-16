
import React, { useEffect, useState } from 'react'
import "./About.scss"
//import { images } from '../../constnts'
import { motion } from 'framer-motion'
import { urlFor, client } from "../../client"
import { AppWrap, MotionWrap } from "../../wrapper"


// const abouts=[
//   {title:"Web Development",description:"I am a good React Developer",imgUrl:images.about01},
//   {title:"Web Desing",description:"I am a good developer",imgUrl:images.about02},
//   {title:"UI/UX", description:"I am a good Ui and Ux desinger",imgUrl:images.about03},
//   {title:"Web Animation",description:"I am a good Animater",imgUrl:images.about04}
// ]


const About = () => {



  const [abouts, setAbouts] = useState()

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);


  return (
    <>
      {/* <h2 className='head-text'>
    I Know that
    <span>Good Design</span>
    <br />
    means
    <span>Good Business</span>
   </h2> */}
      <p className='aboutsText'>
        I am a full-stack developer, with 1+ years of experience in React.  I have experience in building scalable, secure, and reliable web applications, using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards, I am always looking for new challenges and opportunities to grow as a developer.
      </p>

      <div className="app__profiles">

        {abouts && abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
