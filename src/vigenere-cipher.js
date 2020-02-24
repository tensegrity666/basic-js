class VigenereCipheringMachine {

    encrypt(message, key) {
        if ((message === undefined) || (key === undefined)) {
            throw Error('Error!');
        }

        const encripted = [];
        for (let i = 0; i < message.length; i++) {
            encripted.push(message.charCodeAt(i));
        }

        const cryptoKey = [];
        for (let i = 0; i < key.length; i++) {
            cryptoKey.push(key.charCodeAt(i));
        }

        console.log(encripted.join(','));
        console.log(cryptoKey.join(','));
    };

    decrypt(encryptedMessage, key) {
        if ((encryptedMessage === undefined) || (key === undefined)) {
            throw Error('Error!');
        }
    };

};

module.exports = VigenereCipheringMachine;
