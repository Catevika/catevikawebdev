"use server";

import { signIn, signOut } from '@/app/utils/auth';

export const handleGithubLogin = async () => {
  await signIn('github', { redirectTo: '/dashboard' });
};

export const handleLogOut = async () => {
  await signOut();
};