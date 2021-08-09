const Joi = require('joi');

const schemaCheckEmail = Joi.object({
    email: Joi.string().required(),
});

module.exports = schemaCheckEmail;