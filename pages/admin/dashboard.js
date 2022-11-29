import {
	Flex,
	Spinner,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import MessageList from '../../components/admin/messages/MessageList';
import { useEffect } from 'react';

const AdminDashboard = () => {
	const router = useRouter();
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			router.replace('/auth');
		},
	});

	useEffect(() => console.log(session));

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
			<Tabs>
				<TabList>
					<Tab>Messages</Tab>
					<Tab>Two</Tab>
					<Tab>Three</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<MessageList />
					</TabPanel>
					<TabPanel>Two!</TabPanel>
					<TabPanel>Three!</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default AdminDashboard;

AdminDashboard.auth = {
	admin: true,
	unauthorized: '/auth',
};
