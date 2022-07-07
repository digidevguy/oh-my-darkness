import { Flex, Spinner, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import MessageCard from './MessageCard';

const MessageList = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const toast = useToast();
	const { data: session } = useSession();

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
			} else {
				toast({
					title: 'Error',
					description: 'message',
					status: error,
					isClosable: true,
				});
				setIsLoading(false);
			}
		};
		fetchMessages();
	}, []);

	const fetchMessages = async () => {
		setIsLoading(true);
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
		} else {
			toast({
				title: 'Error',
				description: 'message',
				status: error,
				isClosable: true,
			});
			setIsLoading(false);
		}
	};

	const handleUpdate = async (id, body) => {
		const response = await fetch(`/api/messages/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({ ...body, username: session.user.username }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const { message } = await response.json();

		if (response.ok) {
			toast({
				title: 'Success',
				description: message,
				status: 'success',
				isClosable: true,
			});
			fetchMessages();
			return true;
		} else {
			toast({
				title: 'Error',
				description: message,
				status: 'error',
				isClosable: true,
			});
			setIsLoading(false);
			return false;
		}
	};

	const handleClose = async (id) => {
		// Send request to update record
		// Parse repsonse for success
		// If success, add status change flag to card, then push to completed queue
		// If error, post error in toast
	};

	return (
		<Flex minH='100vh' align='center' flexDir='column' gap='1rem' px={2} py={3}>
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
					({
						id,
						character,
						date,
						activeTimes,
						serverName,
						message,
						status,
					}) => (
						<MessageCard
							key={id}
							id={id}
							character={character}
							date={date}
							actimeTimes={activeTimes}
							serverName={serverName}
							message={message}
							onUpdate={handleUpdate}
							status={status}
						/>
					)
				)
			)}
		</Flex>
	);
};

export default MessageList;
