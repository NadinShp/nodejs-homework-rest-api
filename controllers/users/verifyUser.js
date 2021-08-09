const { user: service} = require('../../services');

const verifyUser = async (req, res, next) => {
    const {verificationToken} = req.params;
    try {
        const result = await service.findUser({verifyToken: verificationToken});
        if(!result) {
            res.status(404).json({
                status: '404 Not Found',
                ResponseBody: {
                    massage: 'User not found'
                },
            });
            return;
        }
        const {_id} = result;
        await service.updateUser( _id, {verifyToken: null, verify: true}, {new: true});
        res.json({
            status: '200 OK',
            ResponseBody: {
                message: 'Verification successful'
            },
        })
    } catch(error) {
        next(error);
    }
};

module.exports = verifyUser;