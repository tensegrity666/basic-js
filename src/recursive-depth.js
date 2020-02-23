module.exports = class DepthCalculator {

  calculateDepth(arr) {
    const toFlat = arr.flat();
    let depth = 1;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          return depth += this.calculateDepth(toFlat);
        }
      }
  return depth;
  }

};