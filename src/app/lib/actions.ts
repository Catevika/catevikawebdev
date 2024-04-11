"use server";

import { signIn, signOut } from '@/app/lib/auth';
import type { LoginFormValues } from '@/types/types';

export const handleGithubLogin = async () => {
  await signIn('github', { redirectTo: '/dashboard' });
};

export const handleCredentialsLogin = async (credentials: LoginFormValues) => {
  await signIn('credentials', {
    ...credentials,
    redirectTo: '/blog'
  });
};

export const handleLogOut = async () => {
  await signOut();
};