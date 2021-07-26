const Joi = require('joi');

const schemaAddUser = Joi.object({
  email: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
}).min(2);

module.exports = schemaAddUser;
