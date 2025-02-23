import Like from "../models/likeModel.js";


const addLike = async (req, res) => {
    try {
      const { name, years, author, description, imdb, country, language, trailer, genres, images } = req.body;
      console.log(req.body);
  
      
  
      if (!req.user) {
        return res.status(401).json({ message: 'İstifadəçi tapılmadı, icazəsiz giriş!' });
      }
  
      const existingLike = await Like.findOne({ name, user_id: req.user._id });
      if (existingLike) {
        return res.status(400).json({ message: 'Bu elementi artıq bəyənmisiniz!' });
      }
  
      const like = await Like.create({
        name, years, author, description, imdb, country, language, trailer, genres, images,
        user_id: req.user._id,
      });
  
      res.status(201).json(like);
    } catch (error) {
      console.error('Add Like Error:', error);
      res.status(500).json({ message: `Server xətası: ${error.message}` });
    }
  };
  

const getLike = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
      }
  
      console.log(req.user); 
      const likes = await Like.find({ user_id: req.user._id });
      res.status(200).json(likes);
    } catch (error) {
      res.status(500).json({ message: `Server xətası: ${error.message}` });
    }
  };

const deleteLike = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
    }

    const likeToDelete = await Like.findById(req.params.id);

    if (!likeToDelete) {
      return res.status(404).json({ message: 'Bəyənmə tapılmadı!' });
    }

    if (likeToDelete.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Bu əməliyyatı yerinə yetirmək icazəniz yoxdur!' });
    }

    await Like.deleteOne({ _id: req.params.id });
    res.json({ message: `${req.params.id} ID-li bəyənmə silindi` });
  } catch (error) {
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

export { addLike, deleteLike, getLike };
