import React from 'react';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.textSide}
          >
            <h2 className={styles.title}>
              Engineering <span className="text-gradient">Intelligence</span>
            </h2>
            <p className={styles.description}>
              I am Hamza Abid, an AI Engineer dedicated to crafting solutions at the intersection of 
              artificial intelligence and human-centric design. With a strong foundation in Computer Science, 
              I specialize in Computer Vision, Machine Learning, and Deep Learning.
            </p>
            <p className={styles.description}>
              My journey is fueled by a passion for solving real-world challenges through innovative 
              AI architectures. Whether it's building RAG-driven conversational agents or advanced 
              facial recognition systems, I strive for excellence and technical precision.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>AI Models Built</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.visualSide}
          >
            <div className={styles.imageGrid}>
              <div className={`${styles.imgBox} ${styles.box1}`}>
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500" alt="Code" />
              </div>
              <div className={`${styles.imgBox} ${styles.box2}`}>
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4638ef80d?auto=format&fit=crop&q=80&w=500" alt="AI" />
              </div>
              <div className={`${styles.imgBox} ${styles.box3}`}>
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500" alt="Work" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
