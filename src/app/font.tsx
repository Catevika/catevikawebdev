import { Barlow, Oswald } from 'next/font/google';

export const barlow = Barlow({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: '300'
});

export const oswald = Oswald({
  subsets: [ 'latin' ],
  display: 'swap',
  weight: '600',
  style: 'normal'
});