import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  email: {
    type: String,
    unique:false,
    required: false

  },
  image: {
    type: String,
  }
});



const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
