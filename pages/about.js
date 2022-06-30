import Head from 'next/head';
import {
	Flex,
	Heading,
	Link,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from '@chakra-ui/react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';

const AboutPage = () => {
	return (
		<>
			<Head>
				<title>About Oh My Darkness</title>
				<meta
					name='description'
					content='Our start and ongoing community story'
				/>
			</Head>
			<Banner
				src='/images/web/Final-Fantasy-XIV-1080-Main.jpg'
				width={1920}
				height={1080}
				title='About Us'
				subtitle='Our origin story'
			/>
			<Flex flexDirection='column' gap='1rem' p={5}>
				<Heading as='h2'>How We Started</Heading>
				<Text>
					Oh My Darkness started as an idea between a few friends that were
					unhappy with the road their previous free company was taking. Though a
					focus of raiding progression was agreed, the more important goal was
					to foster an accepting community that promoted positive values.
					Because of this idea, a few friends decided to break away and formed
					their own path.
				</Text>
				<Heading size='md' as='h3'>
					Our Community Goals
				</Heading>
				<Text>
					We are focused on building a community that accepts all types of
					people and wants to challenge themselves with on-content progression
					in a friendly atmosphere. As a group we promote respect above all
					else, and use this notion to foster a caring community.
				</Text>
				<OrderedList>
					<ListItem>No harassment or hate speech will be tolerated.</ListItem>
					<ListItem>
						Unsafe topics such as religion or politics is not allowed.
					</ListItem>
				</OrderedList>
				<Heading as='h2' size='md'>
					Our Members and Peak Times
				</Heading>
				<Text>
					The majority of our group are based on the east coast, and are
					generally active in the evenings during the week and various times
					during the weekend.
				</Text>
				<Heading as='h2' size='md'>
					Weekly and Seasonal Events
				</Heading>
				<Text>
					Our current community focus is on-content raid progression each week,
					as well as map farming. As our community grows we are interested in
					adding more activities both in FFXIV and other games.
				</Text>
				<Flex flexDir='column' gap='0.5rem'>
					<Heading as='h3' size='sm'>
						Current Events
					</Heading>
					<UnorderedList>
						<ListItem>Raiding</ListItem>
						<ListItem>Map Farming</ListItem>
						<ListItem>Mount Farming</ListItem>
					</UnorderedList>
				</Flex>
				<Heading as='h2'>Housing and Chest Guidelines</Heading>
				<Text>
					We've recently moved to a larger FC house in the Kugane area and are
					working on redesigning the house layout. Any design ideas are being
					handled by Soleil Courtois and can be contacted on our{' '}
					<Link
						target='_blank'
						color='blue.600'
						href={process.env.DISCORD_INVITE_LINK}
					>
						Discord server
					</Link>
					.
				</Text>
				<Heading as='h3' size='md'>
					FC Chest
				</Heading>
				<Text>
					As a general rule the chest is open to other players as long as
					everyone contributes to replenishing what is there. We have several
					crafters in our group currently so crystals and crafting materials are
					considered at a premium: generally you can use what is there but
					please be considerate of the other member's needs.
				</Text>
				<UnorderedList>
					<ListItem>
						For consummable usage, please ask an officer before withdrawing
						large stacks.
					</ListItem>
					<ListItem>Gil withdrawals are restricted to officer use.</ListItem>
					<ListItem>
						Restricted items in later tabs are available with an officer's
						approval. Please communicate this in the{' '}
						<Link
							target='_blank'
							color='blue.600'
							href={process.env.DISCORD_INVITE_LINK}
						>
							Discord server
						</Link>{' '}
						or in FC chat.
					</ListItem>
				</UnorderedList>
				<Heading as='h2'>Raiding</Heading>
				<Text>
					We have one static raid group and working on expanding with more
					members for both subtitutions and additional raid groups. Common
					courtesy rules apply when discussing raid topics and during events: we
					make sure to have fun while raiding but maintain focus on making
					progression.
				</Text>
				<Flex flexDir='column' gap='0.5rem'>
					<Heading as='h3' size='sm'>
						Raiding Guidelines
					</Heading>
					<UnorderedList>
						<ListItem>Raid nights are at least twice a week.</ListItem>
						<ListItem>
							Subtitute players are recommended to be able to flex within two
							different raid roles (ex. healer, tank, ranged DPS, etc.)
						</ListItem>
						<ListItem>
							Streaming terms of service rules apply during raid times.
						</ListItem>
					</UnorderedList>
				</Flex>
				<Text>
					Any interests in joining a raid group should be forwarded to the raid
					channel of our{' '}
					<Link
						target='_blank'
						color='blue.600'
						href={process.env.DISCORD_INVITE_LINK}
					>
						Discord server
					</Link>
					.
				</Text>
			</Flex>
			<Footer />
		</>
	);
};
export default AboutPage;
