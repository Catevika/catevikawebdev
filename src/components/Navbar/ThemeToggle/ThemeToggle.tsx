"use client";

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {

  const t = useTranslations('Theme');
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <>
      <Image data-hide-on-theme="light"
        src={`data:image/svg+xml;base64,${btoa(
          atob(
            "PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+"
          ).replace("#FFFFFF", "#22ece5")
        )}`}
        width={32}
        height={32}
        sizes="32x32"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
      <Image data-hide-on-theme="dark"
        src={`data:image/svg+xml;base64,${btoa(
          atob(
            "PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+"
          ).replace("#FFFFFF", "#8b1d79")
        )}`}
        width={32}
        height={32}
        sizes="32x32"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    </>
  );

  return (
    <Image
      tabIndex={0}
      aria-label={resolvedTheme === 'dark' ? t('setLight') : t('setDark')}
      role="button"
      onKeyDown={(event) => event.key === 'Enter' ? setTheme(resolvedTheme === 'dark' ? 'light' : 'dark') : null}
      src={resolvedTheme === 'dark' ? '/icons/sun.svg' : '/icons/moon.svg'}
      alt={resolvedTheme === 'dark' ? t('alt1') : t('alt2')}
      width={32}
      height={32}
      sizes="32x32"
      title={resolvedTheme === 'dark' ? t('setLight') : t('setDark')}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      style={{ cursor: 'pointer' }}
    />
  );
}
