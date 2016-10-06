function VehicleConstructor(vehicleName, numWheels, numPassengers, speedMilesPerHour)
{
  // Validation
  // Make sure the constructor was called using 'new'.
  if(!(this instanceof VehicleConstructor))
  {
    console.log("WARNING: Constructor called without using 'new'. Automatically calling it again with new...")
    return new VehicleConstructor(vehicleName, numWheels, numPassengers, speedMilesPerHour);
  }

  // private variables
  var distance_travelled = 0;
  var self = this;

  // private methods
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }

  // public properties
  this.name = vehicleName;
  this.wheels = numWheels;
  this.passengers = numPassengers;
  this.speed = speedMilesPerHour;

  // public methods
  this.makeNoise = function() {
    console.log("Making lots of noise right now...");
  };

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  };

  this.checkMiles = function(){
    console.log(distance_travelled);
  }
}

var bike = VehicleConstructor("Bike", 2, 1, 30);
bike.makeNoise();
bike.makeNoise = function(){ console.log("ring ring!") }
bike.makeNoise();

var sedan = new VehicleConstructor("Sedan", 4, 5, 90);
sedan.makeNoise = function(){ console.log("Honk Honk!") }
sedan.makeNoise();

var bus = new VehicleConstructor("Bus", 4, 30, 70);
bus.addPassengers = function(passengers){
  this.passengers += passengers;
}
bus.addPassengers(20);
console.log(bus.passengers);

bus.move();
bus.checkMiles();
