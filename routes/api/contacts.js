const express = require('express');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

router.get('/', ctrl.listContacts);

router.get('/:contactId', ctrl.getById);

router.post('/', express.json(), ctrl.addContact);

router.delete('/:contactId', ctrl.removeContact);

router.put('/:contactId', express.json(), ctrl.updateContact);

module.exports = router;
