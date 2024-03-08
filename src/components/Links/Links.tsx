'use client';
import styles from "@/components/Links/Links.module.css";
import { links } from '@/data/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar__links__container}>
      <menu className={styles.navbar__links}>
        {links.map(link => <li key={link.title}><Link className={(pathname === `${link.path}`) ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={link.path}>{link.title}</Link></li>)}
      </menu>
    </nav>
  );
}
