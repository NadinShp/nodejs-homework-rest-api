const { User } = require('../models');

const findUser = filter => User.findOne(filter);

const addUser = ({ email, password }) => {
  const newUser = new User({ email });
  newUser.setPassword(password);
  return newUser.save();
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

const findUserById = (id) => User.findById(id);

module.exports = {
  findUser,
  addUser,
  updateUser,
  findUserById,
};
