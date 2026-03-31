import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/Hero.module.css';
import hamzaImage from '../../public/assets/hamza-image.png'
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to('.hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: true,
        },
      });

      // Text reveal
      // Removed gsap.from('.reveal-text') as it was causing visibility issues.
      // Now using framer-motion directly on elements.
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="home">
      <div className={`${styles.heroBg} hero-bg`}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.badge}
          >
            Available for New Projects
          </motion.div> */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.title}
          >
            I'm <span className="text-gradient">Hamza Abid</span> <br />
           AI/ML Lead
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.subtitle}
          >
            Hi! I'm Hamza abid a Team Lead AI Engineer at InoTexel|TopRated on Upwork | Building Scalable AI & Full Stack Solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.cta}
          >
            <button className={styles.primaryBtn}>
              Explore Work
              <div className={styles.btnGlow}></div>
            </button>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <div className={styles.blob}></div>
          <div className={styles.imageCard}>
            <img src={hamzaImage} alt="Hamza Abid" className={styles.profileImg} />
            <div className={styles.overlay}></div>
          </div>
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`${styles.floating} ${styles.f1}`}
          >
            AI Engineer
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className={`${styles.floating} ${styles.f2}`}
          >
            Full Stack Engineer
          </motion.div>
        </div>
      </div>
      
      <div className={styles.scrollDown}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
