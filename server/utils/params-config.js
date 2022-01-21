const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    //must review how this file is used
    const imageParams = {
        Bucket: 'user-images-5f7293b7-fece-46b1-80af-82d35074b48a',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };

    return imageParams;
};

module.exports = params;