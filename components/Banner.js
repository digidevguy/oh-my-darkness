import Image from 'next/image';
import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';

const Banner = ({ title, subtitle, src, width, height }) => {
	return (
		<Flex
			pos='relative'
			w='full'
			maxH='100vh'
			overflow='hidden'
			flexDirection='column'
		>
			<Flex
				pos='absolute'
				left={['10%', '25%']}
				top={['55%', '60%']}
				zIndex={2}
				flexDirection='column'
				color='white'
				gap={2}
			>
				<Heading>{title}</Heading>
				{subtitle && (
					<>
						<Divider />
						<Text>{subtitle}</Text>
					</>
				)}
			</Flex>
			<Box w='full' pos='relative'>
				<Box
					pos='absolute'
					top={0}
					bottom={0}
					left={0}
					right={0}
					bg='black'
					opacity={0.4}
					zIndex={1}
				></Box>
				<Image src={src} width={width} height={height} layout='responsive' />
			</Box>
		</Flex>
	);
};

export default Banner;
