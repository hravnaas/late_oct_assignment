function hash(str)
{
  str = str.toString();
  var hashed = 0;
  var x = str.length;
  for(var i = 0; i < str.length; i++)
  {
    hashed += str.charCodeAt(i) * i;
  }

  return hashed % Math.pow(10, 8);
}

// Test hash function
console.log("cat: " + hash("cat"));
console.log("tac: " + hash("tac"));
console.log("Cat: " + hash("Cat"));
console.log("car: " + hash("car"));
console.log("test: " + hash("test"));
console.log("1: " + hash(1));
console.log("[1, 3, 5]: " + hash([1, 3, 5]));
console.log("[1, 3, 6]: " + hash([1, 3, 6]));
console.log("12345799876543224567776544334556777: " + hash("12345799876543224567776544334556777"));
console.log("12345799876543224567776544334556778: " + hash("12345799876543224567776544334556778"));
console.log("123457998765432245: " + hash("123457998765432245"));
