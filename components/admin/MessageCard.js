import {
	Button,
	ButtonGroup,
	Divider,
	Flex,
	HStack,
	Spacer,
	Text,
} from '@chakra-ui/react';
import { calculateDiffInDays } from '../../util';

const MessageCard = ({ id, character, serverName, date, message }) => {
	return (
		<Flex
			p={3}
			border='1px'
			borderColor='gray.100'
			rounded={5}
			boxShadow='md'
			flexDir='column'
			gap='1.25rem'
		>
			<HStack>
				<HStack>
					<Text fontWeight='bold'>{character}</Text>
					<Text> - </Text>
					<Text>{serverName}</Text>
				</HStack>
				<Spacer />
				<Text>{calculateDiffInDays(date, new Date())}</Text>
			</HStack>
			<Divider maxW='75%' m='auto' />
			<Text whiteSpace='pre-line'>{message}</Text>
			<ButtonGroup alignSelf={['center', 'end']}>
				<Button colorScheme='blue'>Update</Button>
				<Button colorScheme='red' variant='outline' isDisabled>
					Close
				</Button>
			</ButtonGroup>
		</Flex>
	);
};

export default MessageCard;
