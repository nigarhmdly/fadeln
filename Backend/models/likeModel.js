import mongoose from "mongoose";

const likeSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, 
    years: { type: String, required: true },
    author: { type: String, required: true }, 
    description: { type: String, required: true },  
    imdb: { type: String, required: true },
    country: { type: String, required: true }, 
    language: { type: String, required: true },
    trailer: { type: String, required: true }, 
    genres: { type: String, required: true }, 
    images: { type: String, required: true },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Like = mongoose.model("like", likeSchema);

export default Like;
