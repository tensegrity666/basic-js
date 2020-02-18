module.exports = function countCats(backyard) {
  const toFlat = backyard.reduce((flat, current) => {
    let flatYard = [];
    return flatYard = flat.concat(current);
  }, []);

  const findCat = (arr) => {
    const cats = [];
    arr.forEach(isCat => {
      if (isCat === "^^") {
        cats.push(isCat);
      }
    });
    return cats.length;
  };

  return (findCat(toFlat));
};
