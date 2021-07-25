const Joi = require('joi');

 const schemaUpdateSubscription = Joi.object({
    subscription: Joi.string().valid('starter', 'pro', 'business').required()
 });

 module.exports = schemaUpdateSubscription;