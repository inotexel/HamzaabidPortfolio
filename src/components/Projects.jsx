import React from 'react';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Virtual Sales Agent',
    category: 'Automation',
    desc: 'Social Media Integrated virtual agent built with n8n and AI workflows.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    tags: ['n8n', 'OpenAI', 'Meta API']
  },
  {
    title: 'RAG Health Assistant',
    category: 'Healthcare AI',
    desc: 'Conversational agent for healthcare consultation using RAG and Pinecone.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    tags: ['RAG', 'Pinecone', 'FastAPI']
  },
  {
    title: 'Facial Recognition System',
    category: 'Computer Vision',
    desc: 'Advanced facial recognition and attendance tracking using InceptionResNetV2.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1000',
    tags: ['OpenCV', 'TensorFlow', 'Python']
  },
  {
    title: 'OpenPolicy AI App',
    category: 'Full Stack AI',
    desc: 'Backend system for OpenPolicy application integrated with Microsoft Azure.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    tags: ['FastAPI', 'Azure', 'PostgreSQL']
  },
  {
    title: 'Offline Facial Recognition',
    category: 'App Development',
    desc: 'Edge-based facial recognition app using FaceNet and RetinaNet.',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1000',
    tags: ['FaceNet', 'Python', 'FastAPI']
  },
  {
    title: 'Drowsiness Detection',
    category: 'Computer Vision',
    desc: 'Real-time driver monitoring system using YOLOv4 and OpenCV.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    tags: ['YOLOv4', 'OpenCV', 'Python']
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Selected <span className="text-gradient">Creations</span></h2>
          <p className={styles.subtitle}>Turning complex AI concepts into functional digital solutions.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={styles.projectCard}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a href="#"><Github size={20} /></a>
                    <a href="#"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <button className={styles.viewBtn}>
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
