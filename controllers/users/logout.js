const {user: service} = require('../../services');

const logout = async (req, res, next) => {
    try {
        await service.updateUser(req.user._id, {token: null});
        res.status(204).json({
            status: '204 No Content'
        })
    } catch (error) {
        next(error);
    }
};

module.exports = logout;
