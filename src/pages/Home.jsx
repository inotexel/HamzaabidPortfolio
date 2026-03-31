import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import About from '../components/About';
import AboutMe from '../components/AboutMe';
import Clients from '../components/Clients';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <TrustedBy />
      <About />
      <AboutMe />
      <Clients />
      <Skills />
      <Experience />
      <Testimonials />
      <Projects />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Hamza Abid. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/hamzaabid016" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/Hamza-Abid" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
