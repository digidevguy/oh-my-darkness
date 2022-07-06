import { Flex, Spinner } from '@chakra-ui/react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import MessageCard from '../../components/admin/MessageCard';
import { useState } from 'react';

const tempMessages = [
	{
		id: '001',
		date: new Date('6/1/2022'),
		character: 'Alpha',
		serverName: 'Coeurl',
		activeTimes: '0800 - 1700',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		id: '002',
		date: new Date('7/2/2022'),
		character: 'Bravo',
		serverName: 'Coeurl',
		activeTimes: '0800 - 1700',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Non sodales neque sodales ut etiam sit amet. Senectus et netus et malesuada fames ac. Vulputate eu scelerisque felis imperdiet proin fermentum. Vitae sapien pellentesque habitant morbi tristique senectus. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Felis bibendum ut tristique et egestas quis. Imperdiet nulla malesuada pellentesque elit eget gravida. Amet risus nullam eget felis eget nunc lobortis. Diam sit amet nisl suscipit adipiscing bibendum. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Senectus et netus et malesuada fames ac turpis egestas. Et malesuada fames ac turpis egestas maecenas pharetra convallis.',
	},
	{
		id: '003',
		date: new Date('7/5/2022'),
		character: 'Charlie',
		serverName: 'Coeurl',
		activeTimes: '0800 - 1700',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu.',
	},
];

const AdminDashboard = () => {
	const [messages, setMessages] = useState(tempMessages);
	const [isLoading, setIsLoading] = useState(false);
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
			<Flex
				minH='100vh'
				align='center'
				justify='center'
				flexDir='column'
				gap='1rem'
				px={2}
				py={3}
			>
				{isLoading ? (
					<Spinner
						alignSelf='center'
						size='xl'
						thickness='0.25rem'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
					/>
				) : (
					messages.map(
						({ id, character, date, activeTimes, serverName, message }) => (
							<MessageCard
								key={id}
								character={character}
								date={date}
								actimeTimes={activeTimes}
								serverName={serverName}
								message={message}
							/>
						)
					)
				)}
			</Flex>
		</>
	);
};

export default AdminDashboard;
