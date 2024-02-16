import { lato } from '@/app/font';
import Links from '@/components/Navbar/Links/Links';
import styles from '@/components/Navbar/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.navbar__container}>
      <div className={lato.className}>
        <Link className={styles.navbar__logo} href={'/'}><span>Catevika&nbsp;Web&nbsp;Dev</span></Link>
      </div>
      <Links />
    </header>
  );
}
