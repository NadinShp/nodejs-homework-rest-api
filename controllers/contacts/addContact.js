const { contact: service } = require('../../services');

const addContact = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await service.addContact(body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    if (error.value === undefined) {
      error.code = 400;
    }
    next(error);
  }
};

module.exports = addContact;
