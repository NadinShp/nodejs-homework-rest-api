const express = require('express');
const { validateUserMiddlevare: middl, authenticate, uploadAvatarMiddleware, beforeLoginMiddleware: middleware } = require('../../middleware');
const { schemaAddUser, schemaUpdateSubscription, schemaCheckEmail } = require('../../models');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.patch('/', express.json(), middl(schemaUpdateSubscription), authenticate, ctrl.updateSubscriptionUser);

router.post('/signup', express.json(), middl(schemaAddUser), ctrl.signup);

router.post('/login', express.json(), middl(schemaAddUser), middleware, ctrl.login);

router.get('/logout', authenticate, ctrl.logout);

router.get('/current', express.json(), authenticate, ctrl.getCurrentUserInfo);

router.patch('/avatars', express.json(), authenticate, uploadAvatarMiddleware.single('avatar'), ctrl.updateAvatar);

router.post('/verify', express.json(), middl(schemaCheckEmail), ctrl.verifyUserEmail);

router.get('/verify/:verificationToken', express.json(), ctrl.verifyUser);

module.exports = router;
