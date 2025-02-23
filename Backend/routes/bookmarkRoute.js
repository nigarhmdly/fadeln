import express from "express";
import { userControlAuth } from "../middleware/authMiddleware.js";
import { addBookMark, deleteBookMark, getBookMark } from "../controllers/bookmarkController.js";

const router = express.Router();

router.post('/', userControlAuth, addBookMark);
router.get('/', userControlAuth, getBookMark);
router.delete('/:id', userControlAuth, deleteBookMark);

export default router;
