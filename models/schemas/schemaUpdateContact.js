const Joi = require('joi');

const schemaUpdateContacts = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string(),
  phone: Joi.string(),
}).min(1);

module.exports = schemaUpdateContacts;
