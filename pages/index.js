import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';

export default function Home() {
	return (
		<Flex flexDirection='column'>
			<Flex w='full' gap={4} boxShadow='md' p={3}>
				<a>One</a>
				<a>Two</a>
				<a>Three</a>
			</Flex>
			<Banner
				title='Oh My Darkness'
				subtitle='Subtitle'
				src='/images/web/x1a6AVmvF6HfxbHBN7YzjtbQDkOgFXw3rLziPwX9PIw.webp'
				width={3764}
				height={2352}
			/>
			<Introduction />
			<Features />
			<CallToAction />
			<Footer />
		</Flex>
	);
}
