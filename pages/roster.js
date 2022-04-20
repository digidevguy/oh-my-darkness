import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import MemberProfile from '../components/MemberProfile';

const RosterPage = () => {
	return (
		<Flex flexDirection='column' w='full'>
			<Banner
				src='/images/web/Final-Fantasy-XIV-Endwalker.jpg'
				width={2000}
				height={1270}
				title='Meet the Assholes'
			/>
			<Flex flexDirection='column'>
				<MemberProfile
					name='Ryohou Kamina'
					link='https://na.finalfantasyxiv.com/lodestone/character/3249244/'
					nickname='"Worst Sage in Coeurl"'
					jobs='SGE, PLD'
					reasonToPlay="I've been playing XIV since 1.0, and the community and story have
                    kept me going the entire time!"
					interests='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
                    quam quisque id diam vel.'
					src='/images/members/oath_by_pizza_surgeon_d9m166u-edited.jpg'
					width={891}
					height={1080}
					orientation='row'
				/>
				<MemberProfile
					name='Ryohou Kamina'
					link='https://na.finalfantasyxiv.com/lodestone/character/3249244/'
					nickname='"Worst Sage in Coeurl"'
					jobs='SGE, PLD'
					reasonToPlay="I've been playing XIV since 1.0, and the community and story have
                    kept me going the entire time!"
					interests='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
                    quam quisque id diam vel.'
					src='/images/members/oath_by_pizza_surgeon_d9m166u-edited.jpg'
					width={891}
					height={1080}
					orientation='row-reverse'
				/>
			</Flex>
		</Flex>
	);
};

export default RosterPage;
