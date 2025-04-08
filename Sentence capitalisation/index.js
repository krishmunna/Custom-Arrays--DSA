// capitalise the first word
// convert to lower case
//splait and convert the first letter to caps
//and join them back with rest of the words

const capitalisation = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
};

console.log(capitalisation("hello"));
