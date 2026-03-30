import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.bgGlow}></div>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <motion.h1 
            animate={{ 
              y: [0, -10, 0],
              textShadow: [
                "0 0 20px var(--primary-glow)",
                "0 0 40px var(--primary-glow)",
                "0 0 20px var(--primary-glow)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className={styles.title}
          >
            404
          </motion.h1>
          <h2 className={styles.subtitle}>Lost in Space?</h2>
          <p className={styles.message}>
            The page you're looking for has drifted into another dimension. 
            Let's get you back to safety.
          </p>
          <Link to="/" className={styles.button}>
            <Home size={20} />
            <span>Back to Home</span>
            <div className={styles.btnGlow}></div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
