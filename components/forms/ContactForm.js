import {
	Button,
	FormControl,
	Heading,
	Input,
	Textarea,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';

const ContactForm = () => {
	const toast = useToast();

	const handleSubmit = async (e) => {
		e.preventDefault();
		toast({
			title: 'Warning',
			description: 'This form is still under construction',
			status: 'warning',
			isClosable: true,
		});
	};
	return (
		<VStack
			as='form'
			// m='auto'
			// mt='3rem'
			bg={useColorModeValue('gray.500', 'gray.700')}
			flexDirection='column'
			p={12}
			rounded={[0, 6]}
			boxShadow='lg'
			color='white'
			mb={3}
			onSubmit={handleSubmit}
		>
			<Heading mb={6}>Let us know what you need!</Heading>
			<FormControl>
				<Input placeholder="Y'shtola Rhul" variant='filled' mb={3} />
			</FormControl>
			<FormControl>
				<Input placeholder='Coeurl' variant='filled' mb={3} />
			</FormControl>
			<FormControl>
				<Input
					placeholder='Active times (ex. 08:00 - 05:00)'
					variant='filled'
					type='email'
					mb={3}
				/>
			</FormControl>
			<FormControl>
				<Textarea
					placeholder='Your message (please less than 200 characters).'
					variant='filled'
					mb={6}
				/>
			</FormControl>
			<Button colorScheme='teal' w='full' type='submit'>
				Submit
			</Button>
		</VStack>
	);
};

export default ContactForm;
