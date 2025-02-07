import express from 'express'
import { deleteLike, getLike, postLike } from '../controllers/ItemControllers.js'


const router = express.Router()


router
.route("/")
.get(getLike)
.post(postLike)


router
.route("/:id")
.delete(deleteLike)

export default router