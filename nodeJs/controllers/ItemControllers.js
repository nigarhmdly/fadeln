import DataModel from "../models/DataModels.js"
import LikeModel from "../models/LikeModels.js"



const getLike=async(req,res)=>{
    const item = await LikeModel.find()
    res.json(item)
}

const getData=async(req,res)=>{
    const item = await DataModel.find()
    res.json(item)
}


const postLike=async(req,res)=>{
    const {name,years,author,description,imdb,country,language,trailer,genres,images}=req.body
    let newItem = {name,years,author,description,imdb,country,language,trailer,genres,images}

    try {
        await LikeModel.create(newItem)
        res.json(newItem)
    } catch (error) {
        console.log('post xetasi');
    }
}



const postData=async(req,res)=>{
    const {name,years,author,description,imdb,country,language,trailer,genres,images}=req.body
    let newItem = {name,years,author,description,imdb,country,language,trailer,genres,images}

    try {
        await DataModel.create(newItem)
        res.json(newItem)
    } catch (error) {
        console.log('post xetasi');
    }
}


const deleteLike=async(req,res)=>{
    const {id}=req.params
   

    try {
        await LikeModel.findByIdAndDelete(id)
        res.json('silindi')
    } catch (error) {
        console.log('delete xetasi');
    }
}


export {postLike,deleteLike,getLike,getData,postData}