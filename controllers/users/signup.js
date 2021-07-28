const { user: servece } = require('../../services');

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await servece.findUser({ email });
    if (result) {
      return res.status(409).json({
        status: '409 Conflict',
        'Content-Type': 'application/json',
        ResponseBody: {
          message: 'Email in use',
        },
      });
      return;
    }
    await servece.addUser({ email, password });
    res.status(201).json({
      status: '201 Created',
      'Content-Type': 'application/json',
      ResponseBody: {
        user: {
          email,
          subscription: 'starter',
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
