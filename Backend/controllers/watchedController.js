import Watched from "../models/watchedModel.js";



const addWatch = async (req, res) => {
    try {
      const { name, years, author, description, imdb, country, language, trailer, genres, images } = req.body;
      console.log(req.body);
  
      
  
      if (!req.user) {
        return res.status(401).json({ message: 'İstifadəçi tapılmadı, icazəsiz giriş!' });
      }
  
      const existingWatch = await Watched.findOne({ name, user_id: req.user._id });
      if (existingWatch) {
        return res.status(400).json({ message: 'Bu elementi artıq bəyənmisiniz!' });
      }
  
      const Watch = await Watched.create({
        name, years, author, description, imdb, country, language, trailer, genres, images,
        user_id: req.user._id,
      });
  
      res.status(201).json(Watch);
    } catch (error) {
      console.error('Add Watch Error:', error);
      res.status(500).json({ message: `Server xətası: ${error.message}` });
    }
  };
  

const getWatch = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
      }
  
      console.log(req.user); 
      const Watchs = await Watched.find({ user_id: req.user._id });
      res.status(200).json(Watchs);
    } catch (error) {
      res.status(500).json({ message: `Server xətası: ${error.message}` });
    }
  };

const deleteWatch = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
    }

    const WatchToDelete = await Watched.findById(req.params.id);

    if (!WatchToDelete) {
      return res.status(404).json({ message: ' tapılmadı!' });
    }

    if (WatchToDelete.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Bu əməliyyatı yerinə yetirmək icazəniz yoxdur!' });
    }

    await Watched.deleteOne({ _id: req.params.id });
    res.json({ message: `${req.params.id} ID-li bəyənmə silindi` });
  } catch (error) {
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

export { addWatch, deleteWatch, getWatch };

