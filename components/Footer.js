import { Divider, Flex, Stack, Text } from '@chakra-ui/react';

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
				<Stack direction={['coloumn', 'row']} spacing={4} align='center'>
					<Text>Twitter</Text>
					<Text>LinkedIn</Text>
					<Text>Personal Website</Text>
					<Text>Email</Text>
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Footer;
