import DataModel from "../models/dataModel.js"

const getData=async(req,res)=>{
    const item = await DataModel.find()
    res.json(item)
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

export{postData,getData}