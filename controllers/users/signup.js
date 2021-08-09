const { user: servece } = require('../../services');
const {sendMail} = require('../../utils');

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
    }
    const user = await servece.addUser({ email, password });
    const {verifyToken} = user;

    sendMail({to: email,
      subject: 'Verification letter',
      text: 'You need to follow the link to confirm your email',
      html: `<h2>You need to follow the link to confirm your email</h2>
      <p><a target="_blank" href="http://localhost:3000/users/verify/${verifyToken}">Verify email</a></p>`
    })
    res.status(201).json({
      status: '201 Created',
      'Content-Type': 'application/json',
      ResponseBody: {
        user: {
          email,
          subscription: 'starter',
        },
        message: "Verification email sent",
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
