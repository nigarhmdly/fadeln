import commentModel from "../models/commentModel.js";

const addComment = async (req, res) => {
    try {
      const { movieId, text, name, userId, email,image } = req.body;
  
      if (!text || !name || !userId || !movieId) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
    
      const newComment = new commentModel({ movieId, text, name, userId, email,image });
      await newComment.save();
  
      res.status(201).json(newComment);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

  export{addComment}