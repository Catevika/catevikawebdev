import localFont from 'next/font/local';

export const oxygen = localFont({
  src: [
    {
      path: './Oxygen/Oxygen-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: './Oxygen/Oxygen-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Oxygen/Oxygen-Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  display: 'swap'
});