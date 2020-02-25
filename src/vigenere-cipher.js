class VigenereCipheringMachine {

    encrypt(message, key) {
        if ((message === undefined) || (key === undefined)) {
            throw Error('Error!');
        }

        let encriptedMessage = [];
        let cryptoKey = [];
        const BASE = 26;

        while (message.length > key.length) {
            key = key.concat(key);
        };

        for (let i = 0; i < message.length; i++) {
            cryptoKey.push(key.charCodeAt(i));
            encriptedMessage.push(message.charCodeAt(i));
            encriptedMessage[i] += cryptoKey[i] % BASE;
        }

        encriptedMessage = encriptedMessage.join(',');

        console.log(String.fromCharCode(112));
        console.log(key.charCodeAt(1));
        console.log(message.charCodeAt(0));
        console.log(encriptedMessage);
        console.log(cryptoKey);
        console.log(cryptoKey.length);
        return encriptedMessage;

    };

    decrypt(encryptedMessage, key) {
        if ((encryptedMessage === undefined) || (key === undefined)) {
            throw Error('Error!');
        }
    };

};

module.exports = VigenereCipheringMachine;
