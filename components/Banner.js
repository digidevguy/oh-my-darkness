import Image from 'next/image';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const Banner = ({ title, subtitle, src, width, height }) => {
	return (
		<Flex
			pos='relative'
			w='full'
			maxH='100vh'
			flexDirection='column'
			overflow='hidden'
		>
			<Flex
				pos='absolute'
				left={['10%', '25%']}
				top={['45%', '60%']}
				zIndex={2}
				flexDirection='column'
				color='white'
				gap={2}
			>
				<Heading as='h1' size='2xl'>
					{title}
				</Heading>
				{subtitle && (
					<>
						<Divider />
						<Text fontStyle='italic'>{subtitle}</Text>
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
				<Image
					src={src}
					width={width}
					height={height}
					layout='responsive'
					priority
				/>
			</Box>
		</Flex>
	);
};

export default Banner;
