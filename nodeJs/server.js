import express from 'express'
import cors from 'cors'
import Dotenv from 'dotenv'
import LikeRouter from './router/LikeRouter.js'
import DataRouter from './router/DataRouter.js'
import connectDB from './config/connectDB.js'


const app = express()
Dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))
connectDB()


app.use("/like",LikeRouter)
app.use("/data",DataRouter)


app.listen(5001, ()=>{
    console.log('backend qalxdi');
})