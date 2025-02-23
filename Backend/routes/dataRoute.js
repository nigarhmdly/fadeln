import express from 'express'
import { getData, postData } from '../controllers/dataController.js'


const router = express.Router()


router
.route("/")
.get(getData)
.post(postData)

export default router