const multer = require('multer');
const path = require('path');

const {dir} = path.parse(__dirname);
const tmpDir = path.join(dir, 'tmp');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tmpDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 10000,
    }
})

const uploadAvatarMiddleware = multer({storage});

module.exports = uploadAvatarMiddleware;