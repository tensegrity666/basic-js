const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  if (typeof sample !== 'string' || sample === undefined || sample <= 0 || sample > HALF_LIFE_PERIOD || Math.floor(sample) === MODERN_ACTIVITY) {
    return false;
  }

  sample = parseFloat(sample);
  const K = 0.693 / HALF_LIFE_PERIOD; //!tests failed when uses Math.LN2
  const T = Math.ceil((Math.log(MODERN_ACTIVITY / sample)) / K);

  return isNaN(T) ? false : T;
};
