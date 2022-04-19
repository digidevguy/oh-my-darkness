import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';

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
				zIndex={3}
				flexDirection='column'
				color='white'
			>
				<h1>{title}</h1>
				<p>{subtitle}</p>
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
					zIndex={2}
				></Box>
				<Image src={src} width={width} height={height} layout='responsive' />
			</Box>
		</Flex>
	);
};

export default Banner;
