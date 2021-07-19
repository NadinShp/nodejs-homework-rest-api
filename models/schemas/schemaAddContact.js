const Joi = require('joi');

const schemaAddContact = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string(),
  phone: Joi.required(),
}).min(2);

module.exports = schemaAddContact;
