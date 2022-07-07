import { Flex, Spinner, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import MessageCard from './MessageCard';

const MessageList = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const toast = useToast();

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

	return (
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
	);
};

export default MessageList;
