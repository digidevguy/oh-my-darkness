import connectDB from '../../../middleware/mongodb';
import Message from '../../../models/Message';

const handler = async (req, res) => {
	if (req.method == 'GET') {
		const messages = await Message.find({});

		if (!messages) {
			res.status(500).json({
				message:
					'Unable to load messages at this time. Please try again later.',
			});
		}

		res
			.status(200)
			.json({
				message: 'Messages loaded!',
				messages: messages.map((msg) => msg.toObject({ getters: true })),
			});
	}

	if (req.method === 'POST') {
		const { character, serverName, activeTimes, message } = req.body;

		const newMessage = new Message({
			character,
			activeTimes,
			serverName,
			message,
			date: new Date(),
			status: 'pending',
		});

		try {
			await newMessage.save();
			res.status(201).json({ message: 'Message posted!' });
		} catch (err) {
			res.status(500).json({
				message: 'Unable to send message at this time, please try again later.',
			});
		}
	}
};

export default connectDB(handler);
