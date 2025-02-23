import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expires_at: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
