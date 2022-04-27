import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	IconButton,
	Link as ChakraLink,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { navigation } from '../lib/navigation';
import Drawer from './Drawer';
import DarkModeSwitch from './DarkModeSwitch';

const Layout = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const menuRef = useRef();

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
				bg={useColorModeValue('white', '#1a202c')}
				justifyContent='space-between'
			>
				<Flex>
					<IconButton
						ref={menuRef}
						icon={<HamburgerIcon />}
						bg='none'
						onClick={onOpen}
						display={['inherit', 'none']}
					/>
					<Drawer isOpen={isOpen} onClose={onClose} focusRef={menuRef} />
					<Link href='/' passHref>
						<IconButton as='a' bg='none'>
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
				</Flex>
				<Flex>
					<ButtonGroup display={['none', 'inherit']}>
						{navigation.map((link) => (
							<Link key={link.label} href={link.href} passHref>
								<Button as={ChakraLink} aria-label={link.label} variant='ghost'>
									{link.label}
								</Button>
							</Link>
						))}
					</ButtonGroup>
					<DarkModeSwitch />
				</Flex>
			</Flex>
			<Flex flexDirection='column'>{children}</Flex>
		</>
	);
};

export default Layout;
