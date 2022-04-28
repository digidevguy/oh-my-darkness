import mongoose from 'mongoose';

const GameSchema = mongoose.Schema({
	playerName: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	cardValues: {
		type: Array,
		required: true,
	},
	isBingo: {
		type: Boolean,
		required: true,
	},
});

export default mongoose.models.Game || mongoose.model('Game', GameSchema);
