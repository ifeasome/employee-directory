require('dotenv').config();
const crypto = require('crypto');
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

const hash = (data) => {
    return crypto.createHash('sha256').update(data).digest('hex');
  };

  const encrypt = (data) => {

    let iv = crypto.randomBytes(16);

    let cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(ENCRYPTION_KEY),
      iv
    );

  let encrypted = cipher.update(data);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex');
  
  };

  const decrypt = (data) => {

    let dataParts = data.split(':');
  
    let iv = Buffer.from(dataParts[0], 'hex');
  
    let encryptedData = Buffer.from(dataParts[1], 'hex');
    
    let decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY),
    iv
  );

  let decrypted = decipher.update(encryptedData);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
  
  };

  module.exports = { hash, encrypt, decrypt };

 