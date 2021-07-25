const { model } = require('mongoose');
const { userSchema } = require('./schemas');
const schemaAddUser = require('./schemas/schemaAddUser');

const User = model('user', userSchema);

module.exports = {
  User,
  schemaAddUser,
};
