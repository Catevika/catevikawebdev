import { Oxygen } from 'next/font/google';

export const oxygen = Oxygen({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: [ '300', '400', '700' ],
  fallback: [ 'sans-serif' ]
});