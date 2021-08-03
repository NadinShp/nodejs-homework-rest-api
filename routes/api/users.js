const express = require('express');
const { validateUserMiddlevare: middl, authenticate, uploadAvatarMiddleware } = require('../../middleware');
const { schemaAddUser, schemaUpdateSubscription } = require('../../models');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.patch('/', express.json(), middl(schemaUpdateSubscription), authenticate, ctrl.updateSubscriptionUser);

router.post('/signup', express.json(), middl(schemaAddUser), ctrl.signup);

router.post('/login', express.json(), middl(schemaAddUser), ctrl.login);

router.get('/logout', authenticate, ctrl.logout);

router.get('/current', express.json(), authenticate, ctrl.getCurrentUserInfo);

router.patch('/avatars', express.json(), authenticate, uploadAvatarMiddleware.single('avatar'), ctrl.updateAvatar);

module.exports = router;
