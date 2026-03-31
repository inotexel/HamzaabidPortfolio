import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Experience.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ChevronDown, Briefcase, Calendar, MapPin, Star, Sparkles } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    id: 0,
    shortName: 'Upwork',
    role: 'Top Rated AI/ML Engineer and Full Stack Engineer.',
    company: 'Upwork (Freelance)',
    duration: '2023 – Present',
    location: 'Remote',
    icon: <Sparkles size={20} />,
    desc: 'Delivering high-quality AI, Machine Learning, and Full Stack solutions to global clients. Recognized for technical excellence and being a top-tier solution provider.',
    faqs: [
      { q: "What is your Upwork success rate?", a: "I maintain a Top Rated status with 100% client satisfaction on complex AI and Web projects." },
      { q: "How do we start a project?", a: "We can start with a brief consultation to define requirements, followed by a detailed project roadmap." },
      { q: "What technologies do you specialize in?", a: "My core expertise lies in React.js, Next.js, FastAPI, and advanced LLM integrations using RAG." }
    ]
  },
  {
    id: 1,
    shortName: 'FVU',
    role: 'AI Backend Engineer',
    company: 'FAN VA TEXNOLOGIYALAR UNIVERSITETI',
    duration: '2025/04 – Present',
    location: 'Uzbekistan',
    icon: <Briefcase size={20} />,
    desc: 'Leading AI backend development and architecture for high-scale research projects involving computer vision and neural networks.',
    faqs: [
      { q: "What research areas are you focusing on?", a: "Currently focusing on optimizing deep learning models for real-time edge processing." },
      { q: "Which backend stack is used?", a: "We primarily use FastAPI, PostgreSQL, and Docker for scalable AI services." },
      { q: "How is data security handled?", a: "We implement rigorous encryption standards and secure API protocols for all research data." },
      { q: "How do you handle model deployment?", a: "We use CI/CD pipelines to deploy containerized models to high-performance cloud environments." }
    ]
  },
  {
    id: 2,
    shortName: 'DomuAI',
    role: 'AI Developer',
    company: 'domuai.com',
    duration: '2024/11 – 2025/04',
    location: 'Texas, USA',
    icon: <Star size={20} />,
    desc: 'Developed production-ready AI models and integrated them into web applications, focusing on user-centric AI experiences.',
    faqs: [
      { q: "What models did you develop at DomuAI?", a: "I worked on custom NLP pipelines and automated content generation systems." },
      { q: "How was the team structure?", a: "I collaborated closely with US-based product managers and international frontend engineers." },
      { q: "How do you ensure AI accuracy?", a: "We implement multi-stage validation and reinforcement learning from human feedback (RLHF)." },
      { q: "What was your contribution to UI?", a: "I helped design the interface for AI interaction, making it more intuitive for non-technical users." }
    ]
  },
  {
    id: 3,
    shortName: 'Synaptik',
    role: 'AI Engineer',
    company: 'Synaptik.ai',
    duration: '2023/10 – 2024/07',
    location: 'Lahore, Pakistan',
    icon: <MapPin size={20} />,
    desc: 'Focused on Computer Vision and RAG-based LLM applications, delivering state-of-the-art AI workflows.',
    faqs: [
      { q: "What is RAG?", a: "Retrieval-Augmented Generation (RAG) is our core method for creating specialized LLM knowledge bases." },
      { q: "Key projects at Synaptik?", a: "Developed a healthcare consultation agent and a high-speed facial recognition system." },
      { q: "How do you optimize LLM costs?", a: "By using intelligent prompt engineering and semantic caching to reduce token usage." },
      { q: "Experience with Computer Vision?", a: "Expert in YOLO and OpenCV for real-time object detection and spatial analysis." }
    ]
  }
];

const TypewriterText = ({ text }) => {
  const characters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      key={text}
    >
      {characters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: char === " " ? "8px" : "0px", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};


const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Content animation when tab changes
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    setOpenFaq(null); 
  }, [activeTab]);

  const activeExp = experienceData[activeTab];

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <div className={styles.preTitle}>
            <Sparkles size={16} /> <span>Professional Journey</span>
          </div>
          <h2 className={styles.title}>Where I've <span className="text-gradient">Contributed</span></h2>
        </motion.div>

        {/* Improved Horizontal Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={styles.tabWrapper}
        >
          <div className={styles.tabNav}>
            {experienceData.map((exp) => (
              <button 
                key={exp.id}
                className={`${styles.tabBtn} ${activeTab === exp.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(exp.id)}
              >
                <div className={styles.tabContent}>
                  <div className={styles.tabIcon}>{exp.icon}</div>
                  <div className={styles.tabTexts}>
                    <span className={styles.btnYear}>{exp.duration.split(' – ')[0]}</span>
                    <span className={styles.btnName}>{exp.shortName}</span>
                  </div>
                </div>
                {activeTab === exp.id && (
                  <motion.div layoutId="activeTabGlow" className={styles.tabGlow} />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Content Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={styles.displayCard}
        >
          <div className={styles.contentArea} ref={contentRef}>
            <div className={styles.expGrid}>
              {/* Left Side: Role Info */}
              <div className={styles.roleInfo}>
                <div className={styles.badge}>
                  <Briefcase size={18} />
                  <span>Experience Details</span>
                </div>
                <div className={styles.roleTitle}>
                  <TypewriterText text={activeExp.role} />
                </div>
                <div className={styles.companyMeta}>
                  <div className={styles.companyLogo}>
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className={styles.companyName}>{activeExp.company}</h4>
                    <div className={styles.locDur}>
                      <span><Calendar size={14} /> {activeExp.duration}</span>
                      <span><MapPin size={14} /> {activeExp.location}</span>
                    </div>
                  </div>
                </div>
                <p className={styles.description}>{activeExp.desc}</p>
              </div>

              {/* Right Side: Interactive FAQs */}
              <div className={styles.faqSection}>
                <h4 className={styles.faqTitle}>Related Insights</h4>
                <div className={styles.faqList}>
                  {activeExp.faqs.map((faq, i) => (
                    <div key={i} className={styles.faqItem}>
                      <button 
                        className={`${styles.faqTrigger} ${openFaq === i ? styles.faqActive : ''}`}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className={styles.faqQText}>{faq.q}</span>
                        <div className={styles.iconCircle}>
                          <ChevronDown size={16} className={openFaq === i ? styles.rotateIcon : ''} />
                        </div>
                      </button>
                      <AnimatePresence mode="wait">
                        {openFaq === i && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ 
                              height: 'auto', 
                              opacity: 1, 
                              marginTop: 15,
                              transition: {
                                height: {
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 20
                                },
                                opacity: {
                                  duration: 0.2
                                }
                              }
                            }}
                            exit={{ 
                              height: 0, 
                              opacity: 0, 
                              marginTop: 0,
                              transition: {
                                height: {
                                  duration: 0.3
                                },
                                opacity: {
                                  duration: 0.1
                                }
                              }
                            }}
                            className={styles.faqAnswer}
                          >
                            <motion.div 
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className={styles.answerInner}
                            >
                              {faq.a}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
