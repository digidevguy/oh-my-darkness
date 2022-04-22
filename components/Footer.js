import Link from 'next/link';
import {
	Divider,
	Flex,
	IconButton,
	Link as ChakraLink,
	Stack,
	Text,
} from '@chakra-ui/react';

import contactList from '../lib/socialList';
import { navigation } from '../lib/navigation';

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
					<ChakraLink
						aria-label='Discord invite link'
						href={process.env.DISCORD_INVITE_LINK}
						target='_blank'
					>
						Discord
					</ChakraLink>
				</Stack>
				<Stack>
					<Text fontWeight='bold'>Navigation</Text>
					{navigation.map((link, i) => (
						<Link key={i} href={link.href} passHref>
							<ChakraLink aria-label={link.label}>{link.label}</ChakraLink>
						</Link>
					))}
				</Stack>
			</Stack>
			<Divider m='auto' maxW='50%' />
			<Flex flexDirection={['column', 'row']} gap={10}>
				<Flex flexDirection='column'>
					<Text>
						This site was developed by{' '}
						<Link
							aria-label='Web Developer website'
							href='https://www.mattlittrell.dev'
							target='_blank'
						>
							Matthew Littrell
						</Link>
					</Text>
					<Text>For business inquiries, please use the following methods</Text>
				</Flex>
				<Divider display={['none', 'inherit']} orientation='vertical' />{' '}
				<Stack direction='row' spacing={4} align='center' justify='center'>
					{contactList.map((social) => (
						<Link
							key={social.label}
							href={social.href}
							target='_blank'
							passHref
						>
							<IconButton
								as='a'
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
