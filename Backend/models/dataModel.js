import mongoose from "mongoose";



export const DataSchema = mongoose.Schema({
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



const DataModel = mongoose.model('data',DataSchema)

export default DataModel