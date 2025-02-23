import express from "express";
import { userControlAuth } from "../middleware/authMiddleware.js";
import { addActivity, deleteActivity, getActivity } from "../controllers/activityController.js";


const router = express.Router();

router.post('/', userControlAuth, addActivity);
router.get('/', userControlAuth, getActivity);
router.delete('/:id', userControlAuth, deleteActivity);

export default router;
