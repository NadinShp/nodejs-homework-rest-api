const Jimp = require('jimp');
const path = require('path');
const fs = require('fs/promises');
const {user: service} = require('../../services');

const {dir} = path.parse(__dirname);
const {dir: mainPath} = path.parse(dir);
const publicPath = path.join(mainPath, 'public', 'avatars');

const updateAvatar = async (req, res, next) => {
    const id = (req.user._id).toString();
    const {path: tmpPath} = req.file;

    const {name} = path.parse(tmpPath);
    try {
        await Jimp.read(tmpPath)
        .then(img => {
        fs.unlink(tmpPath);
        return img.autocrop()
        .resize(250, 250)
        .quality(60)
        .write(`${mainPath}/tmp/${name}.jpg`);
    })
        const fileName = path.join(publicPath, `${id}.jpg`);
        const previousPath = path.join(mainPath, 'tmp', `${name}.jpg`);
        await fs.rename(previousPath, fileName);
        const result = await service.updateUser(id, {avatarURL: fileName});
        if(result){
            res.json({
                status: '200 OK',
                'Content-Type': 'application/json',
                ResponseBody: {
                  "avatarURL": fileName,
                }
            })
        }
    } catch (error) {
        fs.unlink(tmpPath, previousPath);
    }
};

module.exports = updateAvatar;