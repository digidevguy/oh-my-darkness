import { Divider, Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react';

import contactList from '../lib/socialList';

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
					{/* <Link href={process.env.DISCORD_INVITE_LINK}>Discord</Link> */}
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
					<Text>
						This site was developed by{' '}
						<Link href='https://www.mattlittrell.dev' target='_blank'>
							Matthew Littrell
						</Link>
					</Text>
					<Text>For business inquiries, please use the following methods</Text>
				</Flex>
				<Divider orientation='vertical' />
				<Stack direction={['coloumn', 'row']} spacing={4} align='center'>
					{contactList.map((social) => (
						<Link key={social.label} href={social.href} target='_blank'>
							<IconButton
								aria-label={social.label}
								icon={social.icon}
								variant='ghost'
								_hover={{ bg: 'gray.200' }}
							/>
						</Link>
					))}
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Footer;
