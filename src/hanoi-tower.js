module.exports = function calculateHanoi(disksNumber, turnsSpeed){
  const turnsCount = (2 ** disksNumber) - 1;
  const toSeconds = (turnsSpeed / 3600);

  const hanoi = {
    turns: turnsCount,
    seconds: turnsCount / toSeconds,
  };

  return hanoi;
}
