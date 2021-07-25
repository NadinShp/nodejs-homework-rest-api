const jwt = require('jsonwebtoken');
require('dotenv').config();

const { user: service } = require('../../services');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await service.findOne({ email });
    if (!user || !user.comparePassword(password)) {
      res.status(401).json({
        status: '401 Unautorized',
        ResponseBody: {
          message: 'Email or password is wrong',
        },
      });
      return;
    }
    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    await service.updateUser(user._id, {token});
    res.json({
      status: '200 OK',
      'Content-Type': 'application/json',
      ResponseBody: {
        token,
        user: {
          email,
          subscription: user.subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
