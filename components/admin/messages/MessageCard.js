import {
	Button,
	ButtonGroup,
	Divider,
	Flex,
	HStack,
	Spacer,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { calculateDiffInDays } from '../../../util';
import NoteForm from './NoteForm';

const MessageCard = ({
	id,
	character,
	serverName,
	date,
	message,
	onUpdate,
	status,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const checkStatus = () => {
		return status === 'complete'
			? 'Complete'
			: status === 'pending'
			? 'Pending'
			: 'Waiting on player';
	};

	return (
		<>
			<NoteForm id={id} isOpen={isOpen} onClose={onClose} onSubmit={onUpdate} />
			<Flex
				p={3}
				border='1px'
				borderColor='gray.100'
				rounded={5}
				boxShadow='md'
				flexDir='column'
				gap='1.25rem'
				minW='sm'
				maxW='3xl'
			>
				<Flex w='full' flexDir='column'>
					<HStack>
						<HStack spacing={4}>
							<Text fontWeight='bold'>{character}</Text>
							<Text> - </Text>
							<Text>{serverName}</Text>
						</HStack>
						<Spacer />
						<Text>{calculateDiffInDays(date, new Date())}</Text>
					</HStack>
					<Text>Status: {checkStatus()}</Text>
				</Flex>
				<Divider maxW='75%' m='auto' />
				<Text whiteSpace='pre-line'>{message}</Text>
				<ButtonGroup alignSelf={['center', 'end']}>
					<Button
						colorScheme='blue'
						onClick={onOpen}
						isDisabled={status === 'complete' ? true : false}
					>
						Update
					</Button>
					<Button
						leftIcon={<CloseIcon />}
						colorScheme='red'
						variant='outline'
						isDisabled
					>
						Close
					</Button>
				</ButtonGroup>
			</Flex>
		</>
	);
};

export default MessageCard;
