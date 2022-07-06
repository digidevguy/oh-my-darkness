import { Flex, Spinner, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
	const router = useRouter();
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			router.replace('/auth');
		},
	});

	if (status === 'loading') {
		return (
			<Flex minH='100vh' align='center' justify='center'>
				<Spinner
					alignSelf='center'
					size='xl'
					thickness='0.25rem'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
				/>
			</Flex>
		);
	}

	return (
		<>
			<Head>
				<title>Admin Dashboard - Oh My Darkness</title>
				<meta name='robots' content='noindex' />
			</Head>
			<Flex minH='100vh' align='center' justify='center'>
				Hai
			</Flex>
		</>
	);
};

export default AdminDashboard;
