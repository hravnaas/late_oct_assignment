function deDupe(str)
{
  var word = "";
  var dict = {};
  var result = [];

  for(var i = 0; i < str.length; i++)
  {
    var lastChar = (i === str.length - 1);

    if(str[i] === " " || lastChar)
    {
        // We found a space or it's the last character.
        if(lastChar)
          word += str[i];

        if(!dict[word])
        {
          dict[word] = word;

          // It's the first time we have seen this word,
          // so append it to the string we will return.
          result.push(word);
        }

        word = "";
    }
    else
      word += str[i];
  }

  return result.join(" ");
}

// Run that sucker
console.log("'" + deDupe("what is a is framework") + "'");
console.log("----------------------")
console.log("'" + deDupe("Betty is sitting over there") + "'");
console.log("----------------------")
console.log("'" + deDupe("Steven Steven is is from Texas Texas") + "'");
console.log("----------------------")
console.log("'" + deDupe("wordendinginspace ") + "'");
console.log("----------------------")
console.log("'" + deDupe(" wordstartingwithspace") + "'");
