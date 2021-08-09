const contactSchema = require('./contact');
const schemaUpdateStatus = require('./schemaUpdateStatus');
const schemaUpdateContacts = require('./schemaUpdateContact');
const schemaAddContact = require('./schemaAddContact');
const userSchema = require('./user');
const schemaAddUser = require('./schemaAddUser');
const schemaUpdateSubscription = require('./schemaUpdateSubscription');
const schemaCheckEmail = require('./schemaCheckEmail');

module.exports = {
  contactSchema,
  schemaUpdateStatus,
  schemaUpdateContacts,
  schemaAddContact,
  userSchema,
  schemaAddUser,
  schemaUpdateSubscription,
  schemaCheckEmail,
};
