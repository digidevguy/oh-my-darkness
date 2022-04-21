import { useRouter } from 'next/router';
import {
	Button,
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Link as ChakraLink,
} from '@chakra-ui/react';

import { navigation } from '../lib/navigation';

const Drawer = ({ isOpen, onClose, focusRef }) => {
	const router = useRouter();

	return (
		<ChakraDrawer
			isOpen={isOpen}
			placement='left'
			onClose={onClose}
			finalFocusRef={focusRef}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader>Oh My Darkness</DrawerHeader>
				<DrawerBody>
					{navigation.map((link) => (
						<Button
							key={link.label}
							as={ChakraLink}
							aria-label={link.label}
							variant='ghost'
							w='full'
							onClick={() => {
								router.push(link.href);
								onClose();
							}}
						>
							{link.label}
						</Button>
					))}
				</DrawerBody>
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
