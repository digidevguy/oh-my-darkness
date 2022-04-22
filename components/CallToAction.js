import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';

const CallToAction = () => {
	return (
		<Flex flexDirection='column' pos='relative' p={[0, 20]}>
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
				<Heading size='lg' color='white' textAlign='center'>
					Join us on Discord!
				</Heading>
				<Button
					as='a'
					aria-label='Discord invite link'
					href={process.env.DISCORD_INVITE_LINK}
					target='_blank'
					colorScheme='purple'
				>
					Discord
				</Button>
			</VStack>
			<Box w='full' pos='relative' rounded={[0, 10]} overflow='hidden'>
				<Image
					src='/images/web/airship.jpg'
					width={2400}
					height={1406}
					layout='responsive'
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
			</Box>
		</Flex>
	);
};

export default CallToAction;
