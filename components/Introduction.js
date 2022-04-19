import Image from 'next/image';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const Introduction = () => {
	return (
		<Stack direction={['column', 'row']}>
			<Stack maxW={['full', '50%']} p={5}>
				<Heading>Title</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
			</Stack>
			<Box w='full'>
				<Image
					src='/images/web/aaed09359bcca1262f923b1c3519eab4.jpg'
					width={3648}
					height={2280}
					layout='responsive'
				/>
			</Box>
		</Stack>
	);
};

export default Introduction;
