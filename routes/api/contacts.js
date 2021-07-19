const express = require('express');
const { validateMiddleware: middl } = require('../../middleware');
const { schemas } = require('../../models');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

router.get('/', ctrl.listContacts);

router.get('/:contactId', ctrl.getById);

router.post(
  '/',
  express.json(),
  middl(schemas.schemaAddContact),
  ctrl.addContact,
);

router.delete('/:contactId', ctrl.removeContact);

router.put(
  '/:contactId',
  express.json(),
  middl(schemas.schemaUpdateContacts),
  ctrl.updateContact,
);

router.patch(
  '/:contactId',
  express.json(),
  middl(schemas.schemaUpdateStatus),
  ctrl.updateStatusContact,
);

module.exports = router;
