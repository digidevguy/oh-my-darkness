import { Divider, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
	return (
		<Flex
			w='full'
			bg='blackAlpha.800'
			color='whiteAlpha.700'
			flexDirection='column'
			p={4}
			alignItems='center'
			justifyContent='space-around'
			gap={5}
		>
			<Stack direction='row' spacing={10}>
				<Stack>
					<Text fontWeight='bold'>Social</Text>
					<Text>Discord</Text>
				</Stack>
				<Stack>
					<Text fontWeight='bold'>Navigation</Text>
					<Text>One</Text>
					<Text>Two</Text>
					<Text>Three</Text>
				</Stack>
			</Stack>
			<Divider m='auto' maxW='50%' />
			<Flex flexDirection={['column', 'row']} gap={10}>
				<Flex flexDirection='column'>
					<Text>This site was developed by INSERT LINK</Text>
					<Text>For business inquiries, please use the following methods</Text>
				</Flex>
				<Divider orientation='vertical' />
				<Stack direction={['coloumn', 'row']} spacing={4} align='center'>
					<IconButton icon={<FaTwitter />} variant='ghost' />
					<IconButton icon={<FaLinkedin />} variant='ghost' />
					<IconButton icon={<HiOutlineMail />} variant='ghost' />
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Footer;
