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
	useColorModeValue,
} from '@chakra-ui/react';
import { BsFillSuitDiamondFill } from 'react-icons/bs';

const Features = () => {
	return (
		<Flex
			m={3}
			flexDirection={['column', null, 'row']}
			boxShadow='md'
			rounded={10}
			overflow='hidden'
		>
			<Box w='full' alignSelf='center'>
				{/* <Image
					src='/images/web/aaed09359bcca1262f923b1c3519eab4.jpg'
					width={3648}
					height={2280}
					layout='responsive'
				/> */}
				<Image
					src='/images/raid-group-photo.png'
					width={1920}
					height={1080}
					layout='responsive'
				/>
			</Box>
			<Stack
				bg={useColorModeValue('gray.200', 'gray.700')}
				p={5}
				boxShadow='md'
				justifyContent='center'
			>
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
				</List>
			</Stack>
		</Flex>
	);
};

export default Features;
