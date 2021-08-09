const {user: service} = require('../../services');
const {sendMail} = require('../../utils');

const verifyUserEmail = async (req, res, next) => {
    const {email} = req.body;
    try {
        const user = await service.findUser({email});
        if(!user) return;
        const {verify, verifyToken} = user;
        if(verify) {
            res.status(400).json({
                status: "400 Bad Request",
                'Content-Type': 'application/json',
                ResponseBody: {
                    message: "Verification has already been passed",
                },
            });
            return;
        }
        sendMail({to: email,
            subject: 'Verification letter',
            text: 'You need to follow the link to confirm your email',
            html: `<h2>You need to follow the link to confirm your email</h2>
            <p><a target="_blank" href="http://localhost:3000/users/verify/${verifyToken}">Verify email</a></p>`
        })
        res.json({
            status: "200 Ok",
            'Content-Type': 'application/json',
            ResponseBody: {
                message: "Verification email sent",
            },
        });
    } catch(error) {
        next(error);
    }
};

module.exports = verifyUserEmail;