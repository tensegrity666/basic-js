class VigenereCipheringMachine {

    encrypt(message, key) {
        if ((message === undefined) || (key === undefined)) {
            throw Error('Error!');
        }

        const BASE_ALPHABET = 26;
        const BASE_UNICODE = 65;
        let encriptedMessage = [];
        let cryptoKey = [];
        const result = [];
        message = message.toUpperCase();
        key = key.toUpperCase();

        while (message.length > key.length) {
            key = key.concat(key);
        };

        for (let i = 0; i < message.length; i++) {
            cryptoKey.push(key.charCodeAt(i));

            console.log(encriptedMessage);
            if ((message.charCodeAt(i) >= 32) || (message.charCodeAt(i) <= 57)) {
                encriptedMessage[i] = message.charCodeAt(i);
            }

            if (message.charCodeAt(i) >= 65) {
                encriptedMessage[i] = ((encriptedMessage[i] + cryptoKey[i]) % BASE_ALPHABET) + BASE_UNICODE;
            }
        }

        for (let i = 0; i < encriptedMessage.length; i++) {
            result.push(String.fromCharCode(encriptedMessage[i]));
        }

        return result.join('');
    };

    decrypt(encryptedMessage, key) {
        if ((encryptedMessage === undefined) || (key === undefined)) {
            throw Error('Error!');
        }
    };

};

module.exports = VigenereCipheringMachine;
