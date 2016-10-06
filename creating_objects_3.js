function VehicleConstructor(vehicleName, numWheels, numPassengers, speedMilesPerHour)
{
  // Validation
  // Make sure the constructor was called using 'new'.
  if(!(this instanceof VehicleConstructor))
  {
    console.log("WARNING: Constructor called without using 'new'. Automatically calling it again with new now.")
    return new VehicleConstructor(vehicleName, numWheels, numPassengers, speedMilesPerHour);
  }

  // public properties
  this.name = vehicleName;
  this.wheels = numWheels;
  this.passengers = numPassengers;
  this.speed = speedMilesPerHour;
  this.distance_travelled = 0;
  this.vin = Math.floor(Math.random() * 10000 + 1)
}

////////////// Adding prototypes /////////////////

VehicleConstructor.prototype.makeNoise = function() {
  console.log("Making lots of noise right now...");
};

VehicleConstructor.prototype.checkMiles = function() {
  console.log(this.distance_travelled);
}

VehicleConstructor.prototype.updateDistanceTravelled = function() {
  this.distance_travelled += this.speed;
}

VehicleConstructor.prototype.move = function(){
  this.updateDistanceTravelled();
  this.makeNoise();
};

////////////// Test code /////////////////

var bike = VehicleConstructor("Bike", 2, 1, 30);
bike.makeNoise();
console.log("VIN: " + bike.vin);
bike.makeNoise = function(){ console.log("ring ring!") }
bike.makeNoise();

var sedan = new VehicleConstructor("Sedan", 4, 5, 90);
sedan.makeNoise = function(){ console.log("Honk Honk!") }
sedan.makeNoise();
console.log("VIN: " + sedan.vin);

var bus = new VehicleConstructor("Bus", 4, 30, 70);
bus.addPassengers = function(passengers){
  this.passengers += passengers;
}
bus.addPassengers(20);
console.log(bus.passengers);
console.log("VIN: " + bus.vin);

bus.move();
bus.checkMiles();
