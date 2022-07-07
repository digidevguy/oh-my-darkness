import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export const authOptions = {
	session: {
		jwt: true,
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'username' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const client = await connectToDatabase();

				const userCollection = client.db().collection('users');

				const user = await userCollection.findOne({
					username: credentials.username,
				});

				if (!user) {
					client.close();
					throw new Error('No user found');
				}

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					client.close();
					throw new Error('Could not log you in at this time.');
				}

				client.close();
				return {
					username: user.username,
					email: user.email,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (account) {
				token.accessToken = account.access_token;
				token.user = user;
			}
			return token;
		},
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
	},
};

export default NextAuth(authOptions);
