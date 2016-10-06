
// var game = {
//   players = [],
//   deck = [],
//   addPlayer = function(){}
// };

// var game = {
//   players : [],
//   deck : [],
//   //addPlayer : function(name){
//   addPlayer : function(){
//     this.players.push(player);
//     //this.players.push(name);
//   }
// };
//
// function playerConstructor(name){
//   player = {};
//   player.name = name;
//   player.hand = [];
//   player.addCard = function(card){
//     player.hand.push(card);
//   };
//   return player;
// }
//
// //example:
// game.addPlayer(playerConstructor('Joe'));
// game.addPlayer(playerConstructor('Sarah'));
// console.log("game")
// console.log(game);
//
// // reminder of how to get things using jquery and AJAX!
// $(document).ready(function(){
//   $.get("http://pokeapi.co/api/v1/pokemon/1/",
//     function(res) {
//       console.log("res");
//       console.log(res);
//       var html_str = "";
//       html_str += "<h4>Types</h4>";
//       html_str += "<ul>";
//       for(var i = 0; i < res.types.length; i++) {
//          html_str += "<li>" + res.types[i].name + "</li>";
//       }
//       html_str += "</ul>";
//       $("#bulbasaur").html(html_str);
//       console.log("html_str");
//       console.log(html_str);
//     },
//     "json");
// });

var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);

MyObjConstructor.prototype.doStuff = function(){};

//////////////////////////

obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
