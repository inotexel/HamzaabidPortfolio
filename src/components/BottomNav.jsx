import React from 'react';
import { Home, User, Briefcase, Mail, LayoutGrid } from 'lucide-react';
import styles from '../styles/BottomNav.module.css';

const BottomNav = () => {
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '#home' },
    { icon: <User size={20} />, label: 'About', path: '#about' },
    { icon: <LayoutGrid size={20} />, label: 'Skills', path: '#skills' },
    { icon: <Briefcase size={20} />, label: 'Projects', path: '#projects' },
    { icon: <Mail size={20} />, label: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={styles.bottomNav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.label} className={styles.navItem}>
            <a href={item.path} className={styles.navLink}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
