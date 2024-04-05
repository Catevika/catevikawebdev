import { oxygen } from '@/app/font';
import { auth } from '@/app/utils/auth';
import DashboardLink from '@/components/DashboardLink/DashboardLink';
import LanguageToogle from '@/components/LanguageToggle/LanguageToogle';
import Links from "@/components/Links/Links";
import styles from "@/components/Navbar/Navbar.module.css";
import ToggleTheme from "@/components/ThemeToggle/ThemeToggle";
import Link from 'next/link';


export default async function Navbar() {
  const session = await auth();

  console.log(session);

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
      <DashboardLink session={session} />
    </header>
  );
}
