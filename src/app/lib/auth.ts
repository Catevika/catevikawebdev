import NextAuth /* , {CredentialsSignin} */ from 'next-auth';
import github from 'next-auth/providers/github';

// class CustomError extends CredentialsSignin {
// 	code = 'custom_error';
// }

export const {handlers, auth, signIn, signOut} = NextAuth({
	providers: [
		github({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
});
