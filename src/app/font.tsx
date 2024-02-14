import { Lato, Oswald } from 'next/font/google';

export const lato = Lato({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: '400'
});

export const oswald = Oswald({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: '600',
  style: 'normal'
});