import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [ mounted, setMounted ] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={32}
      height={32}
      sizes="32x32"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  );

  return (
    <Image
      src={resolvedTheme === 'dark' ? '/icons/sun.svg' : '/icons/moon.svg'}
      alt={resolvedTheme === 'dark' ? 'Sun icon' : 'Moon Icon'}
      width={32}
      height={32}
      sizes="32x32"
      title={resolvedTheme === 'dark' ? 'Set Theme to Light' : 'Set Theme to Dark'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    />
  );
}
