'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  },
  {
    title: 'Admin',
    path: '/admin'
  } ];

  return (
    <div className={styles.navbar__links}>
      {links.map(link => <Link className={(pathname === `${link.path}`) ? 'active' : ''} href={link.path} key={link.title}>{link.title}</Link>)}
    </div>
  );
}
