"use client";

import styles from '@/components/Blog/TagMenu/TagMenu.module.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function TagMenu({ tagsFromPosts }: { tagsFromPosts: string[]; }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.tagMenu__container} ref={menuRef}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>Search per tag
        {isOpen ? (
          <ul>
            {tagsFromPosts.map((tagsFromPost, postIndex) => (
              <li key={postIndex}><Link href={`/blog/tags/${tagsFromPost}`}>{tagsFromPost}</Link></li>
            ))}
          </ul>
        ) : null}
      </button>
    </div>
  );
};
