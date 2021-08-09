const { User } = require('../models');
const gravatar = require('gravatar');
const {v4} = require('uuid');

const findUser = async(filter) => {
  try{
    const result = await User.findOne(filter);
    return result;
  } catch(error) {
    throw error;
  }
};

const addUser = async ({ email, password }) => {
 const avatarURL = gravatar.profile_url(email, {s: '250', r: 'g'}, false);
 const verifyToken = v4();
  try {
    const newUser = new User({ email, avatarURL, verifyToken});
    newUser.setPassword(password);
    await newUser.save();
    return newUser;
  } catch(error) {
    throw error
  }
};

const updateUser = async ( id, updateUserData ) => {
  try {
    const result = await User.findByIdAndUpdate( id, updateUserData, {new: true});
    return result;
  } catch(error) {
    if (error.message.includes('Cast to ObjectId failed for value')){
      return null;
    }
    throw error;
  }
};

const findUserById = async(id) =>  {
  try {
    const result = await User.findById(id);
    return result;
  } catch(error) {
    throw error;
  }
}

module.exports = {
  findUser,
  addUser,
  updateUser,
  findUserById,
};
