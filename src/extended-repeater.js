module.exports = function repeater(str, options) {
    let repeated = '';

    if (typeof str !== 'string') {
        str = str.toString();
    }
    if (str === '') {
        return false;
    }

    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    if (options.addition === undefined) {
        options.addition = '';
    }

    if (typeof options.addition !== 'string') {
        options.addition.toString();
    };


    for (let i = 0; i < options.repeatTimes; i++) {
        repeated += str;

        for (let j = 0; j < options.additionRepeatTimes; j++) {
            repeated += options.addition;

            if (j < options.additionRepeatTimes - 1) {
                repeated += options.additionSeparator;
            }
        }

        if (i < options.repeatTimes - 1) {
            repeated += options.separator;
        }
    }

    return repeated;
};