'use client';

import styles from "@/components/Navbar/Links/Links.module.css";
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export default function Links() {
	const pathname = usePathname();

	const t = useTranslations('NavItems');
	const items = [
		{key: 'id-1', href: '/services'},
		{key: 'id-2', href: '/contact'},
		{key: 'id-3', href: '/about'},
		{key: 'id-4', href: '/blog'},
	] as const;

	return (
		<nav className={styles.navbar__links__container}>
			<menu className={styles.navbar__links}>
				{items.map(({key, href}) => (
					<li key={key}>
						<Link
							className={pathname === href ? styles.navbar__link__active : styles.navbar__link}
							href={href}>
							{t(`${key}.title`)}
						</Link>
					</li>
				))}
			</menu>
		</nav>
	);
}
