import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Testimonials.module.css';

const testimonialList = [
  {
    id: 1,
    name: 'Verified Client',
    role: 'Product Lead @ TechFlow',
    content: "Hamza identified the issue quickly and resolved it with great professionalism. I highly recommend him and would be glad to work with him again in the future.",
    rating: 5,
    projectLink: 'https://www.upwork.com/freelancers/~01c26bf2783ff58f6e',
  },
  {
    id: 2,
    name: 'Verified Client',
    role: 'CEO @ VisionaryAI',
    content: "Hamza resolved the issue quickly and is highly skilled in his field. I would 100% recommend him!",
    rating: 5,
    projectLink: 'https://www.upwork.com/freelancers/~01c26bf2783ff58f6e',
  },
  {
    id: 3,
    name: 'Verified Client',
    role: 'Digital Strategist',
    content: "I'm incredibly impressed with Hamza's work. This part of the project was executed flawlessly, showcasing his outstanding technical skills. Beyond that, his communication was always instant and highly constructive. What I particularly appreciated was his proactive enthusiasm and his knack for gently 'hurrying me up' to ensure we completed the project well within my tight time schedule. He made the seemingly impossible, possible, and I'm genuinely grateful for his dedication and efficiency.",
    rating: 5,
    projectLink: 'https://www.upwork.com/freelancers/~01c26bf2783ff58f6e',
  },
  {
    id: 4,
    name: 'Verified Client',
    role: 'CEO @ VisionaryAI',
    content: "Great experience working with this Hamza. Provided clear guidance on how to apply AI in project management and helped me shape a smarter strategy for my business. Highly recommended!",
    rating: 5,
    projectLink: 'https://www.upwork.com/freelancers/~01c26bf2783ff58f6e',
  },
  {
    id: 5,
    name: 'Verified Client',
    role: 'CEO @ VisionaryAI',
    content: "Great experience working with Hamza! Delivered a well-structured AI solution tailored to our system, meeting all our requirements efficiently. Highly recommend!",
    rating: 5,
    projectLink: 'https://www.upwork.com/freelancers/~01c26bf2783ff58f6e',
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <h2 className={styles.title}>What <span className="text-gradient">Clients Say</span></h2>
          <p className={styles.subtitle}>Real-world feedback from my Top Rated profile on Upwork.</p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialList.map((item) => (
            <motion.div 
              key={item.id} 
              className={styles.cardWrapper}
              variants={itemVariants}
            >
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.ratingStars}>
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                  {/* <div className={styles.quoteIcon}>"</div> */}
                  <p className={styles.content}>{item.content}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.clientInfo}>
                    <h4 className={styles.name}>{item.name}</h4>
                    {/* <p className={styles.role}>{item.role}</p> */}
                  </div>
                  <a 
                    href={item.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.actionBtn}
                  >
                    View on Upwork
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
