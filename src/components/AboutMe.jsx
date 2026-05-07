import React from 'react';
import styles from '../styles/AboutMe.module.css';
import { motion } from 'framer-motion';
import hamzaImage from '../../public/assets/hamza-image.png'
import { toast } from 'react-hot-toast';

const AboutMe = () => {
  const handleDownload = () => {
    toast.success('CV Downloading...');
  };

  return (
    <section className={styles.aboutMe} id="about-me">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.aboutCard}
        >
          <div className={styles.profileHeader}>
            <div className={styles.imageWrapper}>
              <img src={hamzaImage} alt="Hamza Abid" className={styles.avatar} />
            </div>
          </div>

          <div className={styles.textContent}>
            <p className={styles.intro}>
              My name is <strong>Hamza Abid</strong>. I'm a results-driven AI Engineer and Full Stack Developer 
              based in Lahore, Pakistan. I'm passionate about artificial intelligence, computer vision, 
              machine learning, and deep learning, delivering innovative solutions to real-world challenges.
            </p>
            
            <p className={styles.workStatus}>
              {/* I currently work as a <a href="https://www.upwork.com/freelancers/~01c26bf2783ff58f6e" target="_blank" rel="noreferrer" className={styles.link}>Top Rated Solution Provider</a> on Upwork. */}
              As a Top Rated AI Engineer at <a href="https://www.upwork.com/freelancers/~01c26bf2783ff58f6e" target="_blank" rel="noreferrer" className={styles.link}>Upwork</a>, I collaborate with global startups and enterprises to
design, build, and deploy AI-powered solutions.
            </p>
            
            <p className={styles.availability}>
              I'm available for hire and ready to hold project responsibilities.
            </p>
            
            <p className={styles.hobbies}>
              Apart from sitting in front of a Computer 💻, I like exploring new AI technologies 🤖, 
              building immersive 3D web experiences 🌐 and love spending time solving complex technical 
              puzzles 🧩. You can see some of my recent work on <a href="https://linkedin.com/in/Hamza-Abid" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>.
            </p>
          </div>

          <div className={styles.actionArea}>
            <a 
              href="/Hamza_Abid_CV-4.pdf" 
              download 
              className={styles.resumeBtn} 
              onClick={handleDownload}
            >
              Get My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
