import type React from 'react';
import type { MouseEventHandler } from 'react';

export const locales = ['en', 'fr'] as const;
export type Locale = typeof locales[number];

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

export type PasswordEyeProps = {
  isVisible: boolean;
  toggleVisiblePass: MouseEventHandler<HTMLImageElement>;
};

export type RegisterFormValues = {
  image: string;
  imageLight: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type User = {
  image: string;
  imageLight: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type LoginFormValues = {
  username: string;
  password: string;
};

export type ContactFormValues = {
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

export type PostFormValues = {
  image: string;
  title: string;
  description: string;
  slug: string;
  userId: string;
};