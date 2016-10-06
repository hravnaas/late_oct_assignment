function Node(val)
{
  this.val = val;
  this.next = null;
}

function LinkedList()
{
  this.head = null;
}

////////////////////////////

function PriorityQueue()
{
  this.queues = {
    1 : new LinkedList(),
    2 : new LinkedList(),
    3 : new LinkedList(),
    4 : new LinkedList()
  };

  // Picks a queue and adds item to it.
  this.add = function(value, priority)
  {
    appendToQueue(this.queues[priority], value);
  }

  this.remove = function(priority)
  {
    removeFirstInQueue(this.queues[priority]);
  }

  // private methods
  // Adds item to a specific queue.
  var appendToQueue = function(q, value){
    if(!q.head)
      q.head = new Node(value);
    else
    {
        var current = q.head;
        while(current.next)
          current = current.next;
        current.next = new Node(value);
    }
  }

  // Removes first item from a specific queue.
  var removeFirstInQueue = function(q)
  {
    if(q.head)
    {
      q.head = q.head.next;
    }
  };

  this.displayAll = function()
  {
    for(var q in this.queues)
    {
      console.log("Queue " + q);
      displayQueueValues(this.queues[q]);
    }
  }

  var displayQueueValues = function(q)
  {
    if(q.head)
    {
      var current = q.head;
      while(current)
      {
        console.log("\t" + current.val);
        current = current.next;
      }
    }
  }
}

//// Test code ////
var q = new PriorityQueue();
q.add(3, 2);
q.add(1, 1);
q.add(2, 2);
//q.remove(2);
q.remove(4); // Testing removing from empty queue.
q.displayAll();
