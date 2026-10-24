"use client";

import styles from "@/components/Navbar/Navbar.module.css";
import type {Locale} from '@/types/types';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {usePathname, useRouter} from '@/i18n/navigation';
import {useParams} from 'next/navigation';

function LanguageToggle() {
	const t = useTranslations("Language");

	const router = useRouter();
	const currentPathname = usePathname();
	const params = useParams();

	function handleClick(newLocale: Locale): void {
		switch (currentPathname) {
			case '/blog/[slug]':
				if (typeof params.slug !== 'string') {
					throw new Error('Missing blog slug while switching locale.');
				}
				router.replace(
					{pathname: currentPathname, params: {slug: params.slug}},
					{locale: newLocale},
				);
				break;
			case '/blog/tags/[tag]':
				if (typeof params.tag !== 'string') {
					throw new Error('Missing blog tag while switching locale.');
				}
				router.replace(
					{pathname: currentPathname, params: {tag: params.tag}},
					{locale: newLocale},
				);
				break;
			case '/':
			case '/services':
			case '/contact':
			case '/blog':
			case '/about':
			case '/dashboard':
				router.replace(currentPathname, {locale: newLocale});
				break;
		}
	}

	return (
		<div className={styles.navbar__language__container}>
			<div className={styles.navbar__language__images}>
				<Image
					data-hide-on-theme="light"
					className={styles.language__icon__dark}
					tabIndex={0}
					aria-label={t("label")}
					role="button"
					src={"/icons/language.svg"}
					alt={t("alt")}
					sizes="32x32"
					width={32}
					height={32}
				/>
				<Image
					data-hide-on-theme="dark"
					className={styles.language__icon__light}
					tabIndex={0}
					aria-label={t("label")}
					role="button"
					src={"/icons/language-light.svg"}
					alt={t("alt")}
					sizes="32x32"
					width={32}
					height={32}
				/>
			</div>
			<div className={styles.navbar__languages}>
				<p
					tabIndex={0}
					onClick={() => handleClick("en")}
					onKeyDown={(event) =>
						event.key === "Enter" ? handleClick("en") : null
					}
				>
					EN
				</p>
				<p
					tabIndex={0}
					onClick={() => handleClick("fr")}
					onKeyDown={(event) =>
						event.key === "Enter" ? handleClick("fr") : null
					}
				>
					FR
				</p>
			</div>
		</div>
	);
}

export default LanguageToggle;
