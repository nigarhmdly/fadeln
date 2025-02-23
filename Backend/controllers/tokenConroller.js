import Token from '../models/tokenModel.js';

const deleteExpiredTokens = async () => {
  const now = new Date();

  await Token.deleteMany({ expires_at: { $lt: now } });

  console.log("Expired tokens have been deleted");
};

export {deleteExpiredTokens}