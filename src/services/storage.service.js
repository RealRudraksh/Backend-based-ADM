const ImageKit = require('@imagekit/nodejs');

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY?.trim();
const imagekit = new ImageKit({ privateKey });

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    });

    return result;
}

module.exports = uploadFile;