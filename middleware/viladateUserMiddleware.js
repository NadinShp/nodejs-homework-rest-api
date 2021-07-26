const validateUserMiddlevare = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: '400 Bad Request',
        'Content-Type': 'application/json',
        ResponseBody: {
          message: error.message,
        },
      });
    }
    next();
  };
};

module.exports = validateUserMiddlevare;
