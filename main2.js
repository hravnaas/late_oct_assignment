/* ********** Our Node Class **********
Generates a node for a singly linked list
parameters:
 val: a numerical value
private variables/functions:
 none:
public properties/methods:
 val: val;
 next: // another Node or null
 passThis: a function that passes a console log of this and self.
************** END **********   */
var Node = function(val){
 this.val = val;
 this.next = null;
}
Node.prototype.passThis = function(custom_return){
 console.log(this, "this");
 console.log(this.self, "self");
 console.log(custom_return, "My Return");
 return custom_return;
}
// ****************** END OF NODE ******************
/* ************* Singly Linked List Class (SingleList) *****************
Creates a simple singly linked list class with not too many methods yet!
parameters: none
private: none
public properties:
 head: first node in the List
public methods:
 add: adds a new node based on a value passed in. returns this
 dequeue: removes the head, and gives it to a callback, if a callback is passed. returns this
 remove_tail: removes the tail, and gives it to a callback as an argument, only if a callback is passed. returns this.
************** END **********   */
var SingleList= function(){
 this.head = null;
}

SingleList.prototype.add = function (val) {
 if (!this.head){
   this.head = new Node(val);
   return this;
 }
 var current = this.head;
 while(current.next){
   current = current.next;
 }
 current.next = new Node(val);
 return this;
};

SingleList.prototype.dequeue = function (callback) {
 var eliminatedNode = this.head;
 this.head = this.head.next;
 eliminatedNode.next = null;
 if (typeof(callback)=='function'){
   callback(eliminatedNode);
 }
 //console.log(this.head); optional
 return this;
};

// Write a remove tail! :)
SingleList.prototype.removeTail = function(callback) {
  if(!this.head){
    // There are no nodes in the list.
  }
  else if(this.head.next === null)
  {
    // There is only one node in the list (the head).
    eliminatedNode = this.head;
    this.head = null;
  }
  else
  {
    var current = this.head;
    console.log("Current: " + current.val);
    while(current.next && current.next.next)
    {
      current = current.next;
      console.log("Current: " + current.val);
    }

    // 'current' is pointing to the second to last node.
    //  There is no back-pointer, so need to stop here.
    var eliminatedNode = current.next;
    current.next = null;
  }

  if (typeof(callback)=='function'){
    callback(eliminatedNode);
  }
  return this;
}

// ************************ END OF LIST ************************
sList = new SingleList();

sList.add(1).add(2).add(3).add(4);
console.log("Start of list");
sList.removeTail(null)
console.log(sList);
console.log("End of list");

// sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
//  function callback(myNode){
//    console.log(myNode.val, "CHAINING INSANITY!");
//  })
//  .dequeue(
//    function anotherCallback(myNode){
//      console.log("******************************");
//      console.log('Seriously, Stop!', myNode);
//    });


function doMoreStuff(func, otherFunc)
{
    func(otherFunc);
}

function doStuff(func)
{
    doMoreStuff(func, function() {
       console.log("I want to print too") });
}

doStuff(function(oneMoreFunc){
  console.log("Doing lots of stuff");
  oneMoreFunc();
})
