// our test object
// var customObject =
// {
//   name:'California, Eureka',
//   onClick:function()
//   {
//     console.log("I've been clicked");
//     console.log(this.name);
//   }
// }
//our behavior on click.
//$('button').click(customObject.onClick);
//$('button').click(customObject.onClick.bind(customObject));

// var newObject = {
//   name:"West Virginia,  Montani semper liberi"
// }
// modify the button method to this:
// $('button').click(customObject.onClick.bind(newObject));

var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
