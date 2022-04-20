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
} from '@chakra-ui/react';
import Banner from '../components/Banner';

const ContactPage = () => {
	return (
		<Flex w='full' flexDirection='column'>
			<Banner
				src='/images/web/3913755-ffxivendwalker_t2.jpeg'
				width={1200}
				height={675}
				title='Contact Us'
			/>
			<Flex>
				<Flex as='form'></Flex>
			</Flex>
		</Flex>
	);
};

export default ContactPage;
