const {user: service} = require('../../services');

const updateSubscriptionUser = async (req, res, next) => {
    const id = req.user._id;
    const {body} = req;
    try {
        const result = await service.updateUser(id, {subscription: body.subscription});
        if(!result) {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: 'Not found',
            })
        }
        res.json({
            status: 'success',
            code: 200,
            data: {
                result: {
                    email: result.email,
                    subscription: result.subscription,
                }
            }
        });
    } catch(error) {
        next(error);
    }
};

module.exports = updateSubscriptionUser;