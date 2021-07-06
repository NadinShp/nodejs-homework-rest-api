const contacts = require('../../data/contacts');
const Joi = require('joi');

const updateSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string(),
  phone: Joi.string(),
}).min(1);

const updateContact = (req, res) => {
  const { error } = updateSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing fields',
    });
    return;
  }
  const { contactId } = req.params;
  const index = contacts.findIndex(contact => contact.id == contactId);
  if (index === -1) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Not found',
    });
    return;
  }
  contacts[index] = { id: contactId, ...req.body };
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts[index],
    },
  });
};

module.exports = updateContact;
