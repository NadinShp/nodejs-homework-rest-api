const login = require('./login');
const signup = require('./signup');
const logout = require('./logout');
const getCurrentUserInfo = require('./getCurrentUserInfo');
const updateSubscriptionUser = require('./updateSubscriptionUser');
const updateAvatar = require('./updateAvatar');

module.exports = {
  login,
  signup,
  logout,
  getCurrentUserInfo,
  updateSubscriptionUser,
  updateAvatar,
};
