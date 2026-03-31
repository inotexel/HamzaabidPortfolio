import React from 'react';
import slideLogo from '../../public/assets/slide-logo-1.png'
import slideLogo2 from '../../public/assets/slide-logo-2.png'
import slideLogo3 from '../../public/assets/slide-logo-3.png'
import slideLogo4 from '../../public/assets/slide-logo-4.png'
import slideLogo5 from '../../public/assets/slide-logo-5.png'
import slideLogo6 from '../../public/assets/slide-logo-6.png'

import styles from '../styles/TrustedBy.module.css';

const logos = [
  { id: 1, name: 'Tech One', url: slideLogo },
  { id: 2, name: 'Creative Agency', url: slideLogo2 },
  { id: 3, name: 'AI Solutions', url: slideLogo3 },
  { id: 4, name: 'Cloud Computing', url: slideLogo4 },
  { id: 5, name: 'Tech One', url: slideLogo5 },
  { id: 6, name: 'Creative Agency', url: slideLogo6 },
];

const TrustedBy = () => {
  return (
    <section className={styles.trustedBy}>
      <div className={styles.container}>
        <h3 className={styles.title}>Trusted By <span className="text-gradient">Global Innovators</span></h3>
        <div className={styles.sliderWrapper}>
          <div className={styles.slider}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                <img src={logo.url} alt={logo.name} className={styles.logo} />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className={styles.logoItem}>
                <img src={logo.url} alt={logo.name} className={styles.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
