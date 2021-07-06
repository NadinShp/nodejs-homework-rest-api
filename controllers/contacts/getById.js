const contacts = require('../../data/contacts');

const getByid = (req, res) => {
  const { contactId } = req.params;
  const selectContact = contacts.find(contact => contact.id == contactId);
  if (!selectContact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Not found',
    });
    return;
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: selectContact,
    },
  });
};

module.exports = getByid;
