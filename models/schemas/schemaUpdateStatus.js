const Joi = require('joi');

const schemaUpdateStatus = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = schemaUpdateStatus;
