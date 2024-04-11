import { oxygen } from '@/app/font';
import LanguageToogle from '@/components/Navbar/LanguageToggle/LanguageToogle';
import Links from '@/components/Navbar/Links/Links';
import styles from "@/components/Navbar/Navbar.module.css";
import ThemeToggle from '@/components/Navbar/ThemeToggle/ThemeToggle';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <header className={styles.navbar__container}>
      <div className={oxygen.className}>
        <span><Link className={styles.navbar__logo} href={'/'}>Catevika&nbsp;Web&nbsp;Dev</Link></span>
      </div>
      <Links />
      <div className={styles.navbar__toggles}>
        <ThemeToggle />
        <LanguageToogle />
      </div>
    </header>
  );
}
