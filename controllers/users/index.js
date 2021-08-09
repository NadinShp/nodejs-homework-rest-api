const login = require('./login');
const signup = require('./signup');
const logout = require('./logout');
const getCurrentUserInfo = require('./getCurrentUserInfo');
const updateSubscriptionUser = require('./updateSubscriptionUser');
const updateAvatar = require('./updateAvatar');
const verifyUser = require('./verifyUser');
const verifyUserEmail = require('./verifyUserEmail');

module.exports = {
  login,
  signup,
  logout,
  getCurrentUserInfo,
  updateSubscriptionUser,
  updateAvatar,
  verifyUser,
  verifyUserEmail,
};
