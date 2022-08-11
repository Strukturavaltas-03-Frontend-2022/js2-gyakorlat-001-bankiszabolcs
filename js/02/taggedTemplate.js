const janeDoe = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
};

const taggedTemplate = function (texts, ...values) {
  return texts
    .map(
      (text, index) =>
        `${text === " " ? "" : `<em>${text}</em>`}${
          values[index] ? `<strong>${values[index]}</strong>` : ""
        }`
    )
    .join("");
};

taggedTemplate`My name is ${janeDoe.firstName} ${janeDoe.lastName} and I'm ${janeDoe.age} years old.`;

export default taggedTemplate;
