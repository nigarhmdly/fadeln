import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoute.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import DataRouter from './routes/dataRoute.js'
import likeRouter from './routes/likeRoute.js'
import watchedRouter from './routes/watchedRoute.js'
import bookmarkRouter from './routes/bookmarkRoute.js'
import activityRouter from './routes/activityRoute.js'
import Comment from './models/commentModel.js'; 
import commentRoutes from './routes/commentRoute.js'; 
import User from './models/userModel.js';
import { userControlAuth } from './middleware/authMiddleware.js';




dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

connectDB();





app.get('/api/movies/:movieId/comments', async (req, res) => {
  try {
    const { movieId } = req.params;
    const comments = await Comment.find({ movieId });
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Error fetching comments' });
  }
});

// Backend route for getting followers (example)
app.get('/api/users/:userId/followers', (req, res) => {
  const userId = req.params.userId;
  // İzləyicilər məlumatlarını əldə edin
  const followers = getFollowersForUser(userId);
  if (followers) {
    res.json(followers);
  } else {
    res.status(404).json({ message: 'İzləyicilər tapılmadı' });
  }
});




app.delete('/api/users/unfollow', userControlAuth, async (req, res) => {
  const { userIdToUnfollow } = req.body;  // Unfollow etmək istədiyiniz istifadəçinin ID-si
  const userId = req.user._id;  // Sistemdə daxil olan istifadəçinin ID-si

  try {
    const userToUnfollow = await User.findById(userIdToUnfollow);
    if (!userToUnfollow) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı" });
    }

    userToUnfollow.followers = userToUnfollow.followers.filter(
      (id) => id.toString() !== userId.toString()
    );
    await userToUnfollow.save();

    const user = await User.findById(userId);
    user.following = user.following.filter(
      (id) => id.toString() !== userIdToUnfollow.toString()
    );
    await user.save();

    res.status(200).json({ message: "İzləmə dayandırıldı!", following: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xətası" });
  }
});


app.use("/api/users", userRoutes);
app.use('/api', commentRoutes);  
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);
app.use("/data",DataRouter)
app.use("/Like",likeRouter)
app.use("/watched",watchedRouter)
app.use("/bookmark",bookmarkRouter)
app.use("/activity",activityRouter)
app.post('/api/users/auth', (req, res) => {
  console.log(req.body);  // Burada göndərilən məlumatı yoxlayın
  // Giriş prosesi
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
