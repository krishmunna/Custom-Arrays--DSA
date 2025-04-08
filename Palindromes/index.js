// if reverse string is equal to orginal string then its palindrome. ex: cddc --> cddc
// reverse the string and compare with orginal string

const palindrome = str => str.split('').reverse('').join('')=== str;

console.log(palindrome('hello'))
console.log(palindrome('cddc'))