import { Flex, Spinner, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import MessageCard from '../../components/admin/MessageCard';
import { useEffect, useState } from 'react';

const AdminDashboard = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const toast = useToast();
	const router = useRouter();
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			router.replace('/auth');
		},
	});

	useEffect(() => {
		const fetchMessages = async () => {
			const response = await fetch('/api/messages');
			const { message, messages } = await response.json();

			if (response.ok) {
				toast({
					title: 'Success',
					description: message,
					status: 'success',
					isClosable: true,
				});
				setMessages(messages);
				setIsLoading(false);
			}
		};
		fetchMessages();
	}, []);

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
