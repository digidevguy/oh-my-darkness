import {
	Button,
	Flex,
	Heading,
	Input,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const initialState = {
	username: '',
	password: '',
};

const AuthPage = () => {
	const [formValues, setFormValues] = useState(initialState);
	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Clicked');

		const result = await signIn('credentials', {
			redirect: false,
			username: formValues.username,
			password: formValues.password,
		});

		console.log(result);
		if (!result.error) {
			router.replace('/admin/dashboard');
		} else {
			console.error(result.error);
		}
	};

	return (
		<>
			<Head>
				<title>Login - Oh My Darkness</title>
				<meta name='robots' content='noindex' />
			</Head>
			<Flex minH='100vh' align='center' justify='center'>
				<VStack
					as='form'
					p={10}
					bg={useColorModeValue('gray.300', 'gray.700')}
					spacing={6}
					rounded={10}
					onSubmit={handleSubmit}
				>
					<Heading>Login</Heading>
					<Input
						variant='filled'
						placeholder='Username'
						name='username'
						value={formValues.username}
						onChange={handleChange}
					/>
					<Input
						variant='filled'
						type='password'
						placeholder='Password'
						name='password'
						value={formValues.password}
						onChange={handleChange}
					/>
					<Button type='submit' colorScheme='blue'>
						Submit
					</Button>
				</VStack>
			</Flex>
		</>
	);
};

export default AuthPage;
