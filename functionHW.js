//Exercise 1
//Write a JavaScript function that reverses a number.
function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(12345));

//Exercise 2
//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(73));

//Exercise 3
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('corona', 'o'));
