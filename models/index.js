const { Contact, schemas } = require('./contact');
const { User, schemaAddUser } = require('./user');
const {schemaUpdateSubscription, schemaCheckEmail} = require('./schemas');

module.exports = {
  Contact,
  schemas,
  User,
  schemaAddUser,
  schemaUpdateSubscription,
  schemaCheckEmail,
};
