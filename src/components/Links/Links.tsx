'use client';
import styles from "@/components/Links/Links.module.css";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links() {
  const pathname = usePathname();

  const t = useTranslations('NavItems');
  const keys = [ 'id-1', 'id-2', 'id-3', 'id-4' ] as const;

  return (
    <nav className={styles.navbar__links__container}>
      <menu className={styles.navbar__links}>
        {keys.map(key => <li key={key}><Link className={(pathname === t(`${key}.path`)) ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={t(`${key}.path`)}>{t(`${key}.title`)}</Link></li>)}
      </menu>
    </nav >
  );
}
