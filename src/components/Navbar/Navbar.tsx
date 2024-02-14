import { lato } from '@/app/font';
import Link from 'next/link';
import Links from './Links/Links';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar__container}>
      <div className={lato.className}>
        <Link className={styles.navbar__logo} href={'/'}><span>Catevika Web Dev</span></Link>
      </div>
      <Links />
    </header>
  );
}
