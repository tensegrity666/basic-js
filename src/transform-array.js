module.exports = function transform(arr) {
    const SEQUENCES = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    if (arr.length === 0) {
        return [];
    }
    if (!Array.isArray(arr)) {
        throw Error('Error!');
    }

    for (let i = 0; i < arr.length; i++) {
        if ((Array.isArray(arr[i]) || arr[i] === undefined)) {
            arr.splice(i, 1);
        };
        if (arr[i] === SEQUENCES[0] && arr.length > 1) {
            if (arr[i + 1] === undefined) {
                arr.splice(i, 2);
                return arr;
            } else {
                arr.splice(i, 2);
                return arr;
            }
        }

        if (arr[i] === SEQUENCES[1] && arr.length > 1) {
            if (arr[i - 1] === undefined) {
                arr.splice(i, 1);
                return arr;
            } else {
                arr.splice(i - 1, 2);
                return arr;
            }
        }

        if (arr[i] === SEQUENCES[2] && arr.length > 1) {
            if (arr[i + 1] === undefined) {
                arr.splice(i, 2);
                return arr;
            } else {
                arr.splice(i, 1, arr[i + 1]);
                return arr;
            }
        }

        if (arr[i] === SEQUENCES[3] && arr.length > 1) {
            if (arr[i - 1] === undefined) {
                arr.splice(i, 1);
                return arr;
            } else {
                arr.splice(i, 1, arr[i - 1]);
                return arr;
            }
        } else if (arr.length === 1) {
            return [];
        }

    }
};