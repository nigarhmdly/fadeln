import express from "express";
import { userControlAuth } from "../middleware/authMiddleware.js";
import { addLike, deleteLike, getLike } from "../controllers/likeController.js";

const router = express.Router();

router.post('/', userControlAuth, addLike);
router.get('/', userControlAuth, getLike);
router.delete('/:id', userControlAuth, deleteLike);

export default router;
