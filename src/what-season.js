module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  };
  if (typeof date !== 'Object') {
    throw new Error();
  }

  if (date.getMonth() === (11 || 0 || 1)) {
    return 'winter';
  };
  if (date.getMonth() === (2 || 3 || 4)) {
    return 'spring';
  }
  if (date.getMonth() === (5 || 6 || 7)) {
    return 'summer';
  }
  if (date.getMonth() === (8 || 9 || 10)) {
    return 'autumn';
  }
};
