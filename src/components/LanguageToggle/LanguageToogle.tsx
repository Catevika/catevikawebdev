import styles from '@/components/Navbar/Navbar.module.css';
import type { Locale } from '@/types/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

function LanguageToogle() {
  const t = useTranslations('Language');

  const router = useRouter();
  const currentPathname = usePathname();

  function handleClick(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale.toLowerCase()}; path=/; max-age=31536000; samesite=Lax;`;
    // Remove current locale from pathname

    if (currentPathname === '/fr' || currentPathname === '/en') {
      const pathWithoutLocale = newLocale;
      // Remove locale from pathname
      router.push(pathWithoutLocale);
    } else {
      const pathWithoutLocale = currentPathname.replace(/^\/[a-z]{2}\//, '/');

      // Push to same path with new locale
      router.push(`/${newLocale}/${pathWithoutLocale}`);
    }
  }

  return (
    <div className={styles.navbar__language__container}>
      <div className={styles.navbar__language__images}>
        <Image
          data-hide-on-theme='light'
          className={styles.language__icon__dark}
          tabIndex={0}
          aria-label={t(`${'label'}`)}
          role="button"
          src={'/icons/language.svg'}
          alt={t(`${'alt'}`)}
          sizes='32x32'
          width={32}
          height={32}
        />
        <Image
          data-hide-on-theme='dark'
          className={styles.language__icon__light}
          tabIndex={0}
          aria-label={t(`${'label'}`)}
          role="button"
          src={'/icons/language-light.svg'}
          alt={t(`${'alt'}`)}
          sizes='32x32'
          width={32}
          height={32}
        />
      </div>
      <div className={styles.navbar__languages}>
        <p tabIndex={0} onClick={() => handleClick('en')} onKeyDown={(event) => event.key === 'Enter' ? handleClick('en') : null} >EN</p>
        <p tabIndex={0} onClick={() => handleClick('fr')} onKeyDown={(event) => event.key === 'Enter' ? handleClick('fr') : null}>FR</p>
      </div>
    </div>
  );
}

export default LanguageToogle;