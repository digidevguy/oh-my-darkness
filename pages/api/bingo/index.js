import connectDB from '../../../middleware/mongodb';
import Game from '../../../models/Game';

const handler = async (req, res) => {
	if (req.method === 'GET') {
		const history = await Game.find();

		if (!history) {
			return res.json({
				message: 'Unable to find game history, please try again later',
			});
		}

		return res.json({ message: 'Game History loaded', history });
	}

	if (req.method === 'POST') {
		const { cardValues, playerName, isBingo } = req.body;

		const now = new Date();
		const currentGame = new Game({
			playerName,
			date: now,
			cardValues,
			isBingo,
		});

		try {
			await currentGame.save();
		} catch (err) {
			console.log(err);
			return res.status(500).json({
				message:
					'Unable to save game data at this time, please try again later.',
			});
		}

		res.json({ message: 'Got it!' });
	}

	return;
};

export default connectDB(handler);
