import NextAuth from 'next-auth';

export const authOptions = {
	providers: [],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
	},
};

export default NextAuth(authOptions);
