const contacts = require('../../data/contacts');
const { v4 } = require('uuid');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string(),
  phone: Joi.string().required(),
  // phone: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

const addContact = (req, res) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      mesage: 'missing required name field',
    });
    return;
  }
  console.log(error);
  const newContact = { ...req.body, id: v4() };
  contacts.push(newContact);
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addContact;
