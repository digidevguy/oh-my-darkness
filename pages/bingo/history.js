import Link from 'next/link';
import {
	Button,
	Divider,
	Flex,
	Heading,
	Spinner,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import Footer from '../../components/Footer';

const BingoHistoryPage = () => {
	const [gameHistory, setGameHistory] = useState([]);
	const [modalValues, setModalValues] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [scores, setScores] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const toast = useToast();

	const formatDate = (string) => {
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(string).toLocaleDateString([], options);
	};

	const toggleOpen = (arr) => {
		setModalValues(arr);
		onOpen();
	};

	useEffect(() => {
		const fetchHistory = async () => {
			const res = await fetch('/api/bingo');
			const { message, history } = await res.json();

			if (!res.ok)
				return toast({
					title: 'Error',
					description: message,
					status: error,
					isClosable: true,
				});
			setGameHistory(history);
			toast({
				title: 'Success',
				description: message,
				status: 'success',
				isClosable: true,
			});
			setIsLoading(false);
		};
		fetchHistory();
	}, []);

	useEffect(() => {
		const scoreArr = [];
		gameHistory.forEach((game, i) => {
			const index = scoreArr.findIndex((i) => i.playerName === game.playerName);

			if (index !== -1) {
				scoreArr[index].score++;
			} else scoreArr.push({ playerName: game.playerName, score: 0 });
		});
		console.log(scoreArr);
		setScores(scoreArr);
	}, [gameHistory]);

	return (
		<>
			<Flex
				flexDirection='column'
				gap='1.5rem'
				// justify='center'
				align='center'
				minH='100vh'
				p={4}
			>
				<Link href='/bingo' passHref>
					<Button
						bg='blue.300'
						pos='sticky'
						top='5rem'
						right={0}
						alignSelf='flex-end'
						zIndex='sticky'
					>
						New game
					</Button>
				</Link>
				<Modal isOpen={isOpen} onClose={onClose} cardValues={modalValues} />
				{/* <Flex
					gap='1rem'
					flexDirection='column'
					border='1px solid'
					borderColor='gray.200'
					p={4}
					w='90%'
					boxShadow='sm'
				>
					<Heading alignSelf='center'>Current Scores</Heading>
					{scores &&
						scores.map((score, i) => (
							<Flex gap='1rem'>
								<Text>{score.playerName}: </Text>
								<Text>{score.score}</Text>
							</Flex>
						))}
					{isLoading && (
						<Spinner
							alignSelf='center'
							size='xl'
							thickness='0.25rem'
							speed='0.65s'
							emptyColor='gray.200'
							color='blue.500'
						/>
					)}
				</Flex>
				<Divider /> */}
				<Heading>Bingo History</Heading>
				<Divider />
				{gameHistory &&
					gameHistory.map((game, i) => (
						<Flex
							key={i}
							gap='1rem'
							border='1px solid'
							borderColor='gray.200'
							p={4}
							w={['95%', '75%', '50%']}
							justifyContent='space-between'
							boxShadow='md'
							onClick={() => toggleOpen(game.cardValues)}
							_hover={{
								backgroundColor: 'blue.200',
							}}
						>
							<Text>{game.playerName}</Text>
							<Text>{formatDate(game.date)}</Text>
							<Text>{game.isBingo ? 'Won' : 'Not so much'}</Text>
						</Flex>
					))}
				{isLoading && (
					<Spinner
						size='xl'
						thickness='0.25rem'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
					/>
				)}
			</Flex>
			<Footer />
		</>
	);
};

export default BingoHistoryPage;
