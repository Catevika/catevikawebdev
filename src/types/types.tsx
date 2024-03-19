export const locales = [ 'en', 'fr' ] as const;
export type Locale = typeof locales[ number ];

export type Props = {
  params: {
    locale: 'en' | 'fr';
  };
};

export type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'fr';
  };
};

export type FormValues = {
  name: string;
  email: string;
  message: string;
};

export type NavbarLink = {
  title: string;
  path: string;
};

export type SeahorseDetail = {
  summary: string;
  text: string;
};

export type StarIcon = {
  iconDark: string;
  iconLight: string;
  alt: string;
};

export type RocketIcon = {
  iconDark: string;
  iconLight: string;
  alt: string;
};

export type Service = {
  title: string;
  text1: string;
  text2: string;
};

export type ServiceReason = {
  title: string;
  text: string;
};