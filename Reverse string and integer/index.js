//Reverse a string

// use the split method to convert to array(in build)
// use reverse key word which is inbuilt to reverse
// use join to add back words from array(in build)

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("hello"));
console.log(reverseString("apple"));

// Reverse integer
// convert number to string using tostring(inbuild) and parseInt to string to num

const reverseInt = (num) => {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(num);
};

console.log(reverseInt(4321));
