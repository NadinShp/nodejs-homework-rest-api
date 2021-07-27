const { User } = require('../models');

const findUser = async(filter) => {
  try{
    const result = await User.findOne(filter);
    return result;
  } catch(error) {
    throw error;
  }
};

const addUser = async ({ email, password }) => {
  try {
    const newUser = new User({ email });
    newUser.setPassword(password);
    await newUser.save();
    return newUser;
  } catch(error) {
    throw error
  }
};

const updateUser = async ( id, updateUserData ) => {
  try {
    const result = User.findByIdAndUpdate( id, updateUserData, {new: true});
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
    const result = User.findById(id);
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
