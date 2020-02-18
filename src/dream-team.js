module.exports = function createDreamTeam(members) {
  if (members === undefined || !Array.isArray(members) || members.length === 0) {
    return false;
  }
  let teamName = [];
  members.forEach(name => {
    if (typeof name === 'string') {
      return teamName.push(name.trim()[0]);
    } else {
      return false;
    }
  });
  return teamName = teamName.toString().toUpperCase().split(',').sort().join('').toString();
};