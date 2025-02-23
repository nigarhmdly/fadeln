import express from 'express';
import { addComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/movies/:movieId/comments', addComment);

export default router;
