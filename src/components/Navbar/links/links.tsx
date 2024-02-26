'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './links.module.css';

export default function Links() {
  const pathname = usePathname();
  const links = [ {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Services',
    path: '/services'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  } ];

  const [ isOpen, setIsOpen ] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__links}>
        {links.map(link => <Link className={(pathname === `${link.path}`) ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={link.path} key={link.title}>{link.title}</Link>)}
      </div>
      <button className={styles.navbar__button} onClick={toggleMenu}>Menu</button>
      {isOpen ? <div className={styles.navbar__links__mobile}>
        {links.map(link => <Link className={(pathname === `${link.path}`) ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={link.path} key={link.title}>{link.title}</Link>)}
      </div> : null}
    </div>

  );
}
