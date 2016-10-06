// Using Closures make the Fib function with the following specifications

function fib()
{
  var num1 = 0; // number before previous
  var num2 = 1; // previous number

  function nacci()
  {
    // Print the sum of the previous two numbers, num1 and num2
    var newNum = num1 + num2;
    console.log(newNum);

    // Update what is considered the last number and then one before there.
    num1 = num2;
    num2 = newNum;
  }
  return nacci
}

// Run it.
var fibCounter = fib();
for(var i = 0; i < 30; i++)
  fibCounter();
