module.exports = function repeater(str, options) {
    const { repeatTimes, addition, additionRepeatTimes, separator } = options;
    let additionRepeated = addition.repeat(additionRepeatTimes) + separator;
    console.log(additionRepeated);
    let stringRepeated = str + additionRepeated;

    return stringRepeated = stringRepeated.repeat(repeatTimes);
};