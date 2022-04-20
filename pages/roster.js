import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import MemberProfile from '../components/MemberProfile';
import memberInfo from '../lib/memberInfo';

const RosterPage = () => {
	return (
		<Flex flexDirection='column' w='full'>
			<Banner
				src='/images/web/Final-Fantasy-XIV-Endwalker.jpg'
				width={2000}
				height={1270}
				title='Meet the Assholes'
			/>
			<Flex flexDirection='column' maxW='1200px' m='auto'>
				{memberInfo.map((member, i) => (
					<MemberProfile
						name={member.name}
						link={member.link}
						nickname={member.nickname}
						jobs={member.jobs}
						reasonToPlay={member.reasonToPlay}
						interests={member.interests}
						src={member.src}
						width={member.width}
						height={member.height}
						orientation={member.orientation}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default RosterPage;
