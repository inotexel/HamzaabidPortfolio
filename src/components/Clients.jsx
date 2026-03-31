import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Clients.module.css';
import defizerLogo from '../../public/assets/slide-logo-3.png';
import inotexelLogo from '../../public/assets/inotexel.png';
import iqPromptLogo from '../../public/assets/logo-iq.png';


const clientList = [
  { id: 1, name: 'AI/ML Lead Defizer',  type: 'Technology', image: defizerLogo },
  { id: 2, name: 'AI/ML Lead Inotexel',  type: 'Technology', image: inotexelLogo },
  { id: 3, name: 'AI/ML Lead IQ Prompt', type: 'Technology', image: iqPromptLogo },
];

const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <h2 className={styles.title}>Valued Clients & <span className="text-gradient">Partners</span></h2>
        <div className={styles.grid}>
          {clientList.map((client) => (
            <div key={client.id} className={styles.card}>
              <div className={styles.cardTop}>
                <img src={client.image} alt={client.name} className={styles.clientImage} />
              </div>
              <div className={styles.cardBottom}>
                <h4 className={styles.clientName}>{client.name}</h4>
                <p className={styles.type}>{client.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
