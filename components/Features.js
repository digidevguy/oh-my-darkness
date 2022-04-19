import Image from 'next/image';
import {
	Box,
	Flex,
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react';
import { BsFillSuitDiamondFill } from 'react-icons/bs';

const Features = () => {
	return (
		<Flex>
			<Box w='full'>
				<Image
					src='/images/web/3913755-ffxivendwalker_t2.jpeg'
					width={1200}
					height={675}
					layout='responsive'
				/>
			</Box>
			<Stack bg='gray.200' p={5} boxShadow='md'>
				<Heading>List Title</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at
					erat pellentesque adipiscing commodo elit at imperdiet.
				</Text>
				<List spacing={3}>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</ListItem>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</ListItem>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</ListItem>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</ListItem>
				</List>
			</Stack>
		</Flex>
	);
};

export default Features;
