import Link from 'next/link';
import { Button, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<>
			<Flex
				w='full'
				gap={4}
				boxShadow='md'
				p={1}
				position='sticky'
				top={0}
				zIndex={3}
				bg='white'
			>
				<Button variant='ghost'>One</Button>
				<Button variant='ghost'>Two</Button>
				<Button variant='ghost'>Three</Button>
			</Flex>
			<Flex>{children}</Flex>
		</>
	);
};

export default Layout;
