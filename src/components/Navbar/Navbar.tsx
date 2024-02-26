'use client';
import { lato } from '@/app/font';
import Links from "@/components/Links/Links";
import styles from "@/components/Navbar/Navbar.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.navbar__container}>
      <div className={lato.className}>
        <Link className={styles.navbar__logo} href={'/'}><span>Catevika&nbsp;Web&nbsp;Dev</span></Link>
      </div>
      <Links />
      <Link className={(pathname === '/admin') ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={'/admin'}>Admin</Link>
    </header>
  );
}
