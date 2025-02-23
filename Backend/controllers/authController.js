import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import Token from '../models/tokenModel.js';

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Yanlış istifadəçi adı və ya şifrə' });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const expires_at = new Date(Date.now() + 3600000); 

  const newToken = new Token({
    user_id: user._id,
    token: token,
    expires_at: expires_at,
  });

  await newToken.save();

+  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000,  
  });

  res.status(200).json({ message: 'Daxil oldunuz!' });
};
