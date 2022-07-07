import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
	character: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	serverName: {
		type: String,
		required: true,
	},
	activeTimes: {
		type: String,
	},
	message: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	updatedBy: {
		username: {
			type: String,
		},
		dateUpdated: {
			type: Date,
		},
		note: {
			type: String,
		},
	},
});

export default mongoose.models.Message ||
	mongoose.model('Message', MessageSchema);
