const getCurrentUserInfo = (req, res, next) => {
  const { email, subscription } = req.user;
  res.json({
      status: '200 OK',
      "Content-Type": 'application/json',
      ResponseBody: {
        email,
        subscription
      }
  })
};

module.exports = getCurrentUserInfo;