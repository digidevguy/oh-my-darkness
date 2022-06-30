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
			m={5}
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
				maxW={['full', '50%']}
			>
				<Heading textAlign='center'>Our Community</Heading>
				<Text>
					Our community is everything, and we are always interested in creating
					new memories with our people. We are always looking to:
				</Text>
				<List spacing={3}>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Finding like-minded players that enjoy group activities.
					</ListItem>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Having an active dialogue on many topics ranging from planning our
						next events to encouraging a member's recent artwork
					</ListItem>
					<ListItem>
						<ListIcon as={BsFillSuitDiamondFill} />
						Collaborate with other members to create interesting activities
					</ListItem>
				</List>
			</Stack>
		</Flex>
	);
};

export default Features;
