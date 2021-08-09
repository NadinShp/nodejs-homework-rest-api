const validateMiddleware = require('./validateMiddleware');
const validateUserMiddlevare = require('./viladateUserMiddleware');
const authenticate = require('./authenticate');
const uploadAvatarMiddleware = require('./uploadAvatarMiddleware');
const beforeLoginMiddleware = require('./beforeLoginMiddleware');

module.exports = {
  validateMiddleware,
  validateUserMiddlevare,
  authenticate,
  uploadAvatarMiddleware,
  beforeLoginMiddleware,
};
