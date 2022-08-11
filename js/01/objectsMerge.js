// A két objektum:
const johnDoe = {
  firstName: "John",
  lastName: "Doe",
};

const janeDoe = {
  firstName: "Jane",
  lastName: "Doe",
};

const objectsMerge = (...objects) => {
  let finalObj = {};
  objects.map((item, index) => (finalObj[index] = item));
  return finalObj;
};

objectsMerge(johnDoe, janeDoe);

export default objectsMerge;
