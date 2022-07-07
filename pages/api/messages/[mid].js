import connectDB from '../../../middleware/mongodb';
import Message from '../../../models/Message';
import User from '../../../models/User';

const handler = async (req, res) => {
	if (req.method === 'PATCH') {
		const { status, username, note } = req.body;
		const { mid } = req.query;

		const ifAdmin = await User.find({ username });

		if (ifAdmin.length === 0 || ifAdmin[0].admin !== true) {
			return res.status(401).json({
				message: 'Unable to update record due to invalid credentials.',
			});
		}

		const updatedMessage = await Message.findById(mid);

		updatedMessage.status = status;
		updatedMessage.updatedBy.username = username;
		updatedMessage.updatedBy.dateUpdated = new Date();
		updatedMessage.updatedBy.note = note;

		try {
			updatedMessage.save();
			res.status(201).json({ message: 'Message status updated successfully!' });
		} catch (err) {
			res.status(500).json({
				message:
					'Unable to update message status at this time, please try again later.',
			});
		}
	}
};

export default connectDB(handler);
