import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import MemberProfile from '../components/MemberProfile';
import memberInfo from '../lib/memberInfo';

const RosterPage = () => {
	return (
		<Flex flexDirection='column' w='full'>
			<Banner
				src='/images/web/Final-Fantasy-XIV-Endwalker.jpg'
				width={2000}
				height={1270}
				title='Meet the Raid Group'
				// subtitle=''
			/>
			<Flex flexDirection='column' maxW='1200px' m='auto' gap='1rem' p={5}>
				{memberInfo.map((member, i) => (
					<MemberProfile
						key={i}
						name={member.name}
						rank={member.rank}
						link={member.link}
						nickname={member.nickname}
						jobs={member.jobs}
						reasonToPlay={member.reasonToPlay}
						interests={member.interests}
						src={member.src}
						width={member.width}
						height={member.height}
						stream={member.stream}
						// orientation={member.orientation}
						orientation={i % 2 === 0 ? 'row' : 'row-reverse'}
					/>
				))}
			</Flex>
			<Footer />
		</Flex>
	);
};

export default RosterPage;
