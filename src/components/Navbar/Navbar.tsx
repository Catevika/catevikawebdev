'use client';
import { oxygen } from '@/app/font';
import Links from "@/components/Links/Links";
import styles from "@/components/Navbar/Navbar.module.css";
import ToggleTheme from "@/components/ThemeToggle/ThemeToggle";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageToogle from '../LanguageToggle/LanguageToogle';


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.navbar__container}>
      <div className={oxygen.className}>
        <span><Link className={styles.navbar__logo} href={'/'}>Catevika&nbsp;Web&nbsp;Dev</Link></span>
      </div>
      <Links />
      <div className={styles.navbar__toggles}>
        <ToggleTheme />
        <LanguageToogle />
      </div>
      {<Link className={(pathname === '/admin') ? `${styles.navbar__link__active}` : `${styles.navbar__link__admin}`} href={'/admin'}>Admin</Link>}
    </header>
  );
}
