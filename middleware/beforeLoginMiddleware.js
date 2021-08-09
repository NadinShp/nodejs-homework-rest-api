const {user: service} = require('../services');

const beforeLoginMiddleware = async (req, res, next) => {
    const {email} = req.body;
    try {
        const user = await service.findUser({email});
        if(!user) return;
        const {verify} = user;
        if(!verify) {
            res.status(401).json({
                status: 'error',
                code: '401 Email not verified',
                ResponseBody: {
                    message: 'You need to check your email and follow the link to confirm',
                }
            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = beforeLoginMiddleware;