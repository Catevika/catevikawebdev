import type { ObjectId } from 'mongoose';
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
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type UserType = {
  _id: ObjectId;
  image: string;
  imageLight: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type LoginFormValues = {
  name: string;
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
  id: string;
  imageurl: string;
  title: string;
  content: string;
};

export type PostType = {
  _id: ObjectId;
  imageurl: string;
  title: string;
  content: string;
  author: UserType;
  createdAt: Date;
  updatedAt: Date;
};