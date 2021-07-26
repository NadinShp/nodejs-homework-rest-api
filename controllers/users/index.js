const login = require('./login');
const signup = require('./signup');
const logout = require('./logout');
const getCurrentUserInfo = require('./getCurrentUserInfo');
const updateSubscriptionUser = require('./updateSubscriptionUser');

module.exports = {
  login,
  signup,
  logout,
  getCurrentUserInfo,
  updateSubscriptionUser,
};
