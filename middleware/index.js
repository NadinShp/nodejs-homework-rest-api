const validateMiddleware = require('./validateMiddleware');
const validateUserMiddlevare = require('./viladateUserMiddleware');
const authenticate = require('./authenticate');
const uploadAvatarMiddleware = require('./uploadAvatarMiddleware');

module.exports = {
  validateMiddleware,
  validateUserMiddlevare,
  authenticate,
  uploadAvatarMiddleware,
};
