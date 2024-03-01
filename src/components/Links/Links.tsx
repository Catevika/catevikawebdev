'use client';
import styles from "@/components/Links/Links.module.css";
import type { NavbarLink } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links() {
  const pathname = usePathname();

  const links: NavbarLink[] = [ {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Services',
    path: '/services'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  } ];

  // const menuRef = useRef<HTMLDivElement>(null);

  // const [ isOpen, setIsOpen ] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   // Add event listener
  //   document.addEventListener('mousedown', handleOutsideClick);

  //   // Clean up
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, []);

  return (
    <div className={styles.navbar__links__container}>
      <div className={styles.navbar__links}>
        {links.map(link => <Link className={(pathname === `${link.path}`) ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={link.path} key={link.title}>{link.title}</Link>)}
      </div>
      {/* <button className={styles.navbar__button} onClick={toggleMenu}>
        {isOpen ?
          <svg
            className={styles.navbar__icon}
            fill="currentColor"
            width="52"
            height="52"
            version="1.1"
            id="lni_lni-close"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
          >
            <path d="M35.2,32L59.6,7.6c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L32,28.8L7.6,4.4c-0.9-0.9-2.3-0.9-3.2,0
              c-0.9,0.9-0.9,2.3,0,3.2L28.8,32L4.4,56.4c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7L32,35.2l24.4,24.4
              c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L35.2,32z"/>
          </svg>
          : <svg
            className={styles.navbar__icon}
            fill='currentColor'
            width='24'
            height='24'
            version='1.1'
            id='lni_lni-menu'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 64 64'
            xmlSpace='preserve'
          >
            <g>
              <path d='M60,29.8H4c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3C62.3,30.8,61.2,29.8,60,29.8z' />
              <path d='M60,46.8H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3S61.2,46.8,60,46.8z' />
              <path d='M4,17.2h56c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H4c-1.2,0-2.3,1-2.3,2.3S2.8,17.2,4,17.2z' />
            </g>
          </svg>}
      </button> */}
      {/* {isOpen ? <div aria-expanded ref={menuRef} className={styles.navbar__links__mobile}>
        {links.map(link => <Link className={(pathname === `${link.path}`) ? `${styles.navbar__link__active}` : `${styles.navbar__link}`} href={link.path} key={link.title}>{link.title}</Link>)}
      </div> : null} */}
    </div>
  );
}
