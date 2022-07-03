import {
	Flex,
	FormControl,
	FormLabel,
	FormHelperText,
	FormErrorMessage,
	Input,
	Heading,
	Text,
	Textarea,
	Button,
	VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact - Oh My Darkness</title>
				<meta
					name='description'
					content="Let us know you're interested, drop us a message!"
				/>
			</Head>
			<Flex w='full' flexDirection='column'>
				<Banner
					src='/images/web/3913755-ffxivendwalker_t2.jpeg'
					width={1200}
					height={675}
					title='Contact Us'
					subtitle='For reasons?'
				/>
				<Flex
					justify='center'
					align='center'
					flexDirection='column'
					p={[0, 12]}
				>
					<ContactForm />
					<Text fontStyle='italic' mb='1rem'>
						An officer will attempt to reach you in game.
					</Text>
				</Flex>
				<Footer />
			</Flex>
		</>
	);
};

export default ContactPage;
