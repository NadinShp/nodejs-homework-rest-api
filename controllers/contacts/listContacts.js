const contacts = require('../../data/contacts');

const listContacts = (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = listContacts;
