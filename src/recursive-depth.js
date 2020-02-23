module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;

        arr.forEach(element => {
            if (!Array.isArray(element)) {
                return depth = 1;
            } else {
                depth++;
                return arr = arr.flat();
            }
        });
        return depth;
    }
};