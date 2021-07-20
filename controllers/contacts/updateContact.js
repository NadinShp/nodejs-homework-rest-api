const { contact: service } = require('../../services');

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  try {
    const result = await service.updateContact(contactId, body);
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

module.exports = updateContact;
