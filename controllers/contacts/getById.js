const { contact: service } = require('../../services');

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await service.getById(contactId);
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }
    res.json({
      status: 'succes',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
