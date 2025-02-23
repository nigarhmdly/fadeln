import Bookmark from "../models/bookmarkModel.js";


const addBookMark = async (req, res) => {
    try {
      const { name, years, author, description, imdb, country, language, trailer, genres, images } = req.body;
      console.log(req.body);
  
      
  
      if (!req.user) {
        return res.status(401).json({ message: 'İstifadəçi tapılmadı, icazəsiz giriş!' });
      }
  
      const existingBookmark = await Bookmark.findOne({ name, user_id: req.user._id });
      if (existingBookmark) {
        return res.status(400).json({ message: 'Bu elementi artıq bəyənmisiniz!' });
      }
  
      
      const Bookmarks = await Bookmark.create({
        name, years, author, description, imdb, country, language, trailer, genres, images,
        user_id: req.user._id,
      });
  
      res.status(201).json(Bookmarks);
    } catch (error) {
      console.error('Add Bookmark Error:', error);
      res.status(500).json({ message: `Server xətası: ${error.message}` });
    }
  };
  

const getBookMark = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
      }
  
      console.log(req.user);
      const Bookmarks = await Bookmark.find({ user_id: req.user._id });
      res.status(200).json(Bookmarks);
    } catch (error) {
      res.status(500).json({ message: `Server xətası: ${error.message}` });
    }
  };

const deleteBookMark = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
    }

    const BookmarkToDelete = await Bookmark.findById(req.params.id);

    if (!BookmarkToDelete) {
      return res.status(404).json({ message: ' tapılmadı!' });
    }

    if (BookmarkToDelete.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Bu əməliyyatı yerinə yetirmək icazəniz yoxdur!' });
    }

    await Bookmark.deleteOne({ _id: req.params.id });
    res.json({ message: `${req.params.id} ID-li bəyənmə silindi` });
  } catch (error) {
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

export { addBookMark, deleteBookMark, getBookMark };

