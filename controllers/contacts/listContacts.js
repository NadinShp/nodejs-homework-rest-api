const { contact: service } = require('../../services');

const listContacts = async (req, res, next) => {
  let result;
  try {
    if (req.query.favorite) {
    result = await service.filteredListContact(req.query);
    } else {
    result = await service.listContact(req.query);
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
    }
}

module.exports = listContacts;
