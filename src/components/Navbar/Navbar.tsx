import { barlow } from '@/app/font';
import Link from 'next/link';
import Links from './Links/Links';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar__container}>
      <div className={barlow.className}>
        <Link className={styles.navbar__logo} href={'/'}><span>Catevika Web Dev</span></Link>
      </div>
      <Links />
    </div>
  );
}
