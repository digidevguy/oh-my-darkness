import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';

export default function Home() {
	const [status, setStatus] = useState();

	useEffect(() => {
		const fetchStatus = async () => {
			const res = await fetch('https://api.twitch.tv/helix/streams', {
				headers: { 'Content-Type': 'application/json' },
			});
			const { data } = await res.json();
			setStatus(data);
		};
		fetchStatus();
	}, []);

	useEffect(() => console.log(status), [status]);

	return (
		<Flex flexDirection='column'>
			{/* <Banner
				title='Oh My Darkness'
				subtitle='Because why not?'
				src='/images/web/x1a6AVmvF6HfxbHBN7YzjtbQDkOgFXw3rLziPwX9PIw.webp'
				width={3764}
				height={2352}
			/> */}
			<Banner
				title='Oh My Darkness'
				subtitle='Because why not?'
				src='/images/members/unknown (4).png'
				width={1920}
				height={1080}
			/>
			<Introduction />
			<Features />
			<CallToAction />
			<Footer />
		</Flex>
	);
}
