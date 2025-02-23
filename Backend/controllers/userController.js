import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from 'bcryptjs';



export const followUser = async (req, res) => {
  try {
    const { userIdToFollow } = req.body;
    const userId = req.user.id;

    if (userId === userIdToFollow) {
      return res.status(400).json({ message: "Özünüzü follow edə bilməzsiniz!" });
    }

    const user = await User.findById(userId);
    const targetUser = await User.findById(userIdToFollow);

    if (!user || !targetUser) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı" });
    }

    if (targetUser.followers.includes(userId)) {
      return res.status(400).json({ message: "Siz artıq bu istifadəçini izləyirsiniz" });
    }

    targetUser.followers.push(userId);
    await targetUser.save();

    res.json({ following: true, message: "İstifadəçini izlədiniz" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xətası" });
  }
};


export const unfollowUser = async (req, res) => {
  try {
    const { userIdToUnfollow } = req.body;
    const userId = req.user._id;

    const userToUnfollow = await User.findById(userIdToUnfollow);
    if (!userToUnfollow) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı" });
    }

    userToUnfollow.followers = userToUnfollow.followers.filter(
      (id) => id.toString() !== userId.toString()
    );
    await userToUnfollow.save();

    const user = await User.findById(userId);
    user.following = user.following.filter(
      (id) => id.toString() !== userIdToUnfollow.toString()
    );
    await user.save();

    res.status(200).json({ message: "İzləmə dayandırıldı!", following: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xətası" });
  }
};


const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.parolaKontrol(password))) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: 'Email ya da parola hatalı' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        email: user.email,
        name: user.name,
      });
    } else {
      res.status(400).json({ message: "User not added" });
    }
  } catch (error) {
    console.log("Register Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Çıkış Yapıldı' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server xətası: " + error.message });
  }
};


const getUserProfile = async (req, res) => {
  try {
    if (req.user) {
      res.json({
        _id: req.user._id,
        name: req.user.name,
        image: req.user.image,
        email: req.user.email,
        biography: req.user.biography,
      });
    } else {
      res.status(404).json({ message: 'Kullanıcı Bulunamadı' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.image = req.body.image || user.image;
      user.biography = req.body.biography || user.biography;

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        image: updatedUser.image,
        email: updatedUser.email,
        biography: updatedUser.biography
      });
    } else {
      res.status(404).json({ message: 'Kullanıcı Bulunamadı' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postUserProfile = async (req, res) => {
  try {
    const { name, image, email, biography } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: 'İstifadəçi tapılmadı, icazəsiz giriş!' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu email artıq istifadə olunur!' });
    }

    const user = await User.create({
      name,
      image,
      email,
      biography,
      user_id: req.user._id,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error('Add User Error:', error);
    res.status(500).json({ message: `Server xətası: ${error.message}` });
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
};
