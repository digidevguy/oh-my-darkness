import Link from 'next/link';
import Image from 'next/image';
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link as ChakraLink,
} from '@chakra-ui/react';

import { navigation } from '../lib/navigation';

const Layout = ({ children }) => {
	return (
		<>
			<Flex
				w='full'
				gap={4}
				boxShadow='md'
				p={2}
				pl={3}
				position='sticky'
				top={0}
				zIndex={3}
				bg='white'
			>
				<Link href='/' passHref>
					<IconButton bg='none'>
						<Box w='full'>
							<Image
								src='/images/transparent-final-fantasy-xiv-stormblood-final-fantasy-xiv-heavensward-final-fantasy-ii-meteor.webp'
								width={920}
								height={920}
								layout='responsive'
							/>
						</Box>
					</IconButton>
				</Link>
				{navigation.map((link) => (
					<Link key={link.label} href={link.href} passHref>
						<Button
							as={ChakraLink}
							aria-label={link.label}
							variant='ghost'
							// _hover={{ textDecoration: 'none' }}
						>
							{link.label}
						</Button>
					</Link>
				))}
			</Flex>
			<Flex>{children}</Flex>
		</>
	);
};

export default Layout;
