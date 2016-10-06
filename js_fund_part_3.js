function personConstructor(name)
{
  var result = {
    name : name,
    distance_travelled : 0,
    say_name : function() { alert(name) },
    say_something: function(something) { console.log(name + " says " + something) },
    walk : function() { this.distance_travelled += 3 },
    run : null,
    crawl : null
  }

  return result;
}

res = personConstructor("Bob");
//res.say_name();
res.say_something("coffee");
res.walk();

console.log(res);
