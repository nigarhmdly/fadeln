import ActivityModel from "../models/activityModel.js";

const addActivity = async (req, res) => {
  try {
    const { name, years, author,body, description, imdb, country, language, trailer, genres, images } = req.body;
    console.log(req.body);

    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı, icazəsiz giriş!' });
    }

    const existingActivity = await ActivityModel.findOne({ name, user_id: req.user._id });
    if (existingActivity) {
      return res.status(400).json({ message: 'Bu elementi artıq bəyənmisiniz!' });
    }

    const newActivity = await ActivityModel.create({
      name, years, author, description,body, imdb, country, language, trailer, genres, images,
      user_id: req.user._id,
    });

    res.status(201).json(newActivity); 
  } catch (error) {
    console.error('Add Activity Error:', error);
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

const getActivity = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
    }

    console.log(req.user); 
    const activity = await ActivityModel.find({ user_id: req.user._id });
    res.status(200).json(activity); 
  } catch (error) {
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

const deleteActivity = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı!' });
    }

    const activityToDelete = await ActivityModel.findById(req.params.id);

    if (!activityToDelete) {
      return res.status(404).json({ message: 'Tapılmadı!' });
    }

    if (activityToDelete.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Bu əməliyyatı yerinə yetirmək icazəniz yoxdur!' });
    }

    await ActivityModel.deleteOne({ _id: req.params.id });
    res.json({ message: `${req.params.id} ID-li bəyənmə silindi` });
  } catch (error) {
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

export { addActivity, deleteActivity, getActivity };
