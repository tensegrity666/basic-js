module.exports = function repeater(str, options) {
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


    const addSeparate = options.addition + options.additionSeparator;
    const addRepeat = addSeparate.repeat(options.additionRepeatTimes);
    const lastAddSeparator = addRepeat.lastIndexOf(options.additionSeparator);
    const repeatWithSeparator = addRepeat.slice(0, lastAddSeparator) + options.separator;
    const stringToRepeat = str + repeatWithSeparator;

    return stringToRepeat.repeat(options.repeatTimes);
};