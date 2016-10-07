

function Stack(){
  var main = [];
  this.pop = function(){
    if (main){
      this.size--;
      return main.pop();
    }
  }
  this.top = function(){
    if (main){
      return main[main.length-1]
    }
  }
  this.size = main.length;

  //1.  write this.push
  this.push = function(item){
    main.push(item);
    this.size++;
    return item;
  }

  //2.  write this.contains
  this.contains = function(val){
    for(var i = 0; i < this.size; i++)
    {
      if(main[i] === val)
        return true;
    }
    return false;
  }
}

////////////////////////////////////////////////////

function Queue()
{
  function Node(val)
  {
    this.val = val;
    this.next = undefined;
  };

  var head;
  var tail;
  this.enqueue = function(val)
  {
    var node = new Node(val);
    if (!head){
      head = node;
      tail = head;
      return this;
    }
    // var current_tail = tail;
    // tail.next = node;
    // tail = current_tail;
    // return this;

    node.next = tail;
    tail = node;
    return this;
  };

  // 3. write a dequeue function
  this.dequeue = function()
  {
    current_head = head;
    if(!tail || tail.next == "undefined")
    {
      tail = "undefined";
      head = "undefined";
      return this;
      //return current_head;
    }

    current = tail;
    while(current.next !== head)
      current = current.next;

    current.next = "undefined";
    head = current;
    return this;
  };

  this.displayAll = function()
  {
    console.log("Displaying queue in order from back to front:")
    if(tail)
    {
      current = tail;
      while(current)
      {
        console.log(current.val);
        current = current.next;
      }
    }
    else
    {
      console.log("Queue is empty");
    }
  };

  // 4. write a peek (front) function using this queue implementation
  this.peek = function()
  {
    return head ? head.val : "undefined";
  }
}
  // 5. What data type usually underlies a circular queue?
  //object

  // 6. In a circular queue does the head point to an index or a value?
  // index

  // 7. What operator (division, multiplication, modulus, addition, subtraction) is used to keep a counter inside a specific range ie. counter ++; counter = counter (operator) max_range
  // ?

  // 8. What is a priority queue? long answer
  // Short answer: A queue where items are prioritized based on their priority setting.

  // 9. Bonus: implement a deck (dequeue (double ended queue)): this data structure can do FIFO or LIFO operations, basically one structure doing stack and queue functionality!
  // 10. Bonus2:  implement an insert @ location (index) in a queue!  How efficient can you get this while maintaining the remaining efficiency?

// Stack tests
// var stack = new Stack();
// stack.push("item 1");
// stack.pop();
// stack.push("item 2");
// console.log(stack.contains("item 1"));
// console.log(stack.contains("item 2"));

// Queue tests
var q = new Queue();
//q.displayAll();
q.enqueue(2);
q.enqueue(3);
q.enqueue(5);
q.enqueue(10);
q.displayAll();
q.dequeue();
q.displayAll();
console.log(q.peek());
