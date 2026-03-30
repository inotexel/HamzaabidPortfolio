import React from 'react';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv, 
  SiFastapi, 
  SiReact, 
  SiDocker, 
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPostgresql
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const skills = [
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
  { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
  { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
  { name: 'FastAPI', icon: <SiFastapi />, color: '#05998B' },
  { name: 'ReactJS', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Azure', icon: <VscAzure />, color: '#0078D4' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
  { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: '#F7931E' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className={styles.subtitle}>
            Specialized in building end-to-end AI solutions with cutting-edge technologies.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={styles.skillIconWrapper}
            >
              <div className={styles.iconContainer} style={{ '--hover-color': skill.color }}>
                <div className={styles.icon}>
                  {skill.icon}
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
