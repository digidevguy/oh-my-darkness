import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const Introduction = () => {
	return (
		<Stack m='auto' maxW={['full', '50%']} p={5} justify='center'>
			<Heading>Welcome to Oh My Darkness</Heading>
			<Text>
				Our community is built on enjoying the many activities in FFXIV and
				engaging in a welcoming and friendly environment. We believe in
				accepting all members new and verterans alike that want to find a home
				to create new friends and memories.
			</Text>
			<Text>
				We have one static raid group focused on on-content progression, as well
				as map and mount farm parties throughout each week. Additional
				activities and raid groups are welcome as well. Please see our about
				page or join our Discord server for more information.
			</Text>
		</Stack>
	);
};

export default Introduction;
