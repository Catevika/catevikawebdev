import { Barlow_Condensed, Oswald } from 'next/font/google';

export const barlowCond = Barlow_Condensed({
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