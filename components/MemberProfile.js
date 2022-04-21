import Image from 'next/image';
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const MemberProfile = ({
	name,
	link,
	nickname,
	jobs,
	reasonToPlay,
	interests,
	rank,
	src,
	height,
	width,
	orientation = 'row',
}) => {
	const flexDirection = ['column', orientation];

	return (
		<Flex
			flexDirection={flexDirection}
			p={5}
			align='center'
			gap='1rem'
			border='1px'
			borderColor='gray.200'
			boxShadow='md'
		>
			<Box w={['full', '50%']} rounded={10} overflow='hidden'>
				<Image src={src} width={width} height={height} layout='responsive' />
			</Box>
			<Flex w={['full', '50%']} p={5} flexDirection='column' gap='1rem'>
				<Heading>{name}</Heading>
				<Flex gap='1rem'>
					<Text fontWeight='bold'>Nickname:</Text>
					<Text fontStyle='italic'>{nickname}</Text>
				</Flex>
				<Flex gap='1rem'>
					<Text fontWeight='bold'>Rank:</Text>
					<Text fontStyle='italic'>{rank}</Text>
				</Flex>
				<Divider maxW='60%' />
				<Flex gap='1rem'>
					<Text fontWeight='bold'>Main Jobs:</Text>
					<Text>{jobs}</Text>
				</Flex>
				<Flex gap='1rem' flexDirection='column'>
					<Text fontWeight='bold'>When did you start playing XIV and why?</Text>
					<Text>{reasonToPlay}</Text>
				</Flex>
				<Flex gap='1rem' flexDirection='column'>
					<Text fontWeight='bold'>Interests</Text>
					<Text>{interests}</Text>
				</Flex>
				<Button as='a' href={link} target='_blank' colorScheme='teal'>
					Lodestone
				</Button>
			</Flex>
		</Flex>
	);
};

export default MemberProfile;
