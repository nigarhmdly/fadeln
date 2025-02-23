import express from "express";
import { userControlAuth } from "../middleware/authMiddleware.js";
import { addWatch, deleteWatch, getWatch } from "../controllers/watchedController.js";

const router = express.Router();

router.post('/', userControlAuth, addWatch);
router.get('/', userControlAuth, getWatch);
router.delete('/:id', userControlAuth, deleteWatch);

export default router;
