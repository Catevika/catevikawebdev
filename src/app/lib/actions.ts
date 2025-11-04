'use server';

import {signIn, signOut} from '@/app/lib/auth';

export const handleGithubLogin = async () => {
	await signIn('github', {redirectTo: '/dashboard'});
};

export const handleLogOut = async () => {
	await signOut();
};
