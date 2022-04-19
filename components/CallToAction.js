import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';

const CallToAction = () => {
	return (
		<Flex flexDirection='column' pos='relative'>
			<VStack
				pos='absolute'
				top='50%'
				left='50%'
				transform='translate(-50%,-50%)'
				zIndex={1}
				p={10}
				bg='whiteAlpha.400'
				rounded={15}
				spacing={5}
			>
				<Heading color='white'>Join us on Discord!</Heading>
				<Button>Discord</Button>
			</VStack>
			<Image
				src='/images/web/Final-Fantasy-XIV-Endwalker.jpg'
				width={2000}
				height={1270}
			/>
			<Box
				pos='absolute'
				top={0}
				bottom={0}
				right={0}
				left={0}
				bg='black'
				opacity={0.25}
			></Box>
		</Flex>
	);
};

export default CallToAction;
