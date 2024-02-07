import { barlowCond } from '@/app/font';
import Link from 'next/link';
import Links from './Links/Links';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar__container}>
      <div className={barlowCond.className}>
        <Link href={'/'}><p className={styles.navbar__logo}>Catevika Web Dev</p></Link>
      </div>
      <Links />
    </div>
  );
}
