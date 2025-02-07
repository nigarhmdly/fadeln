import mongoose from "mongoose";


export const LikeSchema = mongoose.Schema({
    name:{type:String},
    years:{type:String},
    author:{type:String},
    description:{type:String},
    imdb:{type:String},
    country:{type:String},
    language:{type:String},
    trailer:{type:String},
    genres:{type:String},
    images:{type:String},
},{timestamps:true})



const LikeModel = mongoose.model('like',LikeSchema)

export default LikeModel