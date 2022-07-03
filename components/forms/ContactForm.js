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
import { useEffect, useState } from 'react';

const initialState = {
	character: '',
	serverName: '',
	activeTimes: '',
	messages: '',
};

const ContactForm = () => {
	const [formValues, setFormValues] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(`api/messages`, {
				method: 'POST',
				body: JSON.stringify(formValues),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const { message } = await response.json();

			if (response.ok) {
				setLoading(false);
				setFormValues(initialState);
				toast({
					title: 'Success',
					description: message,
					status: 'success',
					isClosable: true,
				});
			} else {
				setLoading(false);
				toast({
					title: 'Error',
					description: message,
					status: 'error',
					isClosable: true,
				});
			}
		} catch (err) {}
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
			color={useColorModeValue('black', 'white')}
			mb={3}
			onSubmit={handleSubmit}
		>
			<Heading mb={6} size='lg' textAlign='center'>
				Let us know what you need!
			</Heading>
			<FormControl>
				<Input
					placeholder="Y'shtola Rhul"
					variant='filled'
					mb={3}
					name='character'
					value={formValues.character}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl>
				<Input
					placeholder='Coeurl'
					variant='filled'
					mb={3}
					name='serverName'
					value={formValues.serverName}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl>
				<Input
					placeholder='Active times (ex. 08:00 - 05:00)'
					variant='filled'
					type='email'
					mb={3}
					name='activeTimes'
					value={formValues.activeTimes}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl>
				<Textarea
					placeholder='Your message (please less than 200 characters).'
					variant='filled'
					mb={6}
					name='message'
					value={formValues.message}
					onChange={handleChange}
				/>
			</FormControl>
			<Button
				colorScheme='teal'
				w='full'
				type='submit'
				isLoading={loading}
				loadingText='Sending...'
			>
				Submit
			</Button>
		</VStack>
	);
};

export default ContactForm;
