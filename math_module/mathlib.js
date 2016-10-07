module.exports =
{
  add: function(num1, num2)
  {
    return num1 + num2;
  },

  multiply: function(num1, num2)
  {
    return num1 * num2;
  },

  square: function(num)
  {
    return num * num;
  },

  random: function(minNum, maxNum)
  {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }
}
