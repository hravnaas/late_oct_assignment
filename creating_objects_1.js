function VehicleConstructor(vehicleName, numWheels, numPassengers)
{
    this.name = vehicleName;
    this.wheels = numWheels;
    this.passengers = numPassengers;
    this.makeNoise = function() {
      console.log("Making lots of noise right now...");
    }
}

var bike = new VehicleConstructor("Bike", 2, 1);
bike.makeNoise();
bike.makeNoise = function(){ console.log("ring ring!") }
bike.makeNoise();

var sedan = new VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise = function(){ console.log("Honk Honk!") }
sedan.makeNoise();

var bus = new VehicleConstructor("Bus", 4, 30);
bus.addPassengers = function(passengers){
  this.passengers += passengers;
}
bus.addPassengers(20);
console.log(bus.passengers);

// How to check if a new was used when calling constructor.
// if (!(this instanceof NinjaConstructor)) {
//    // the constructor was called without "new".
//    return new NinjaConstructor(name, prevOccupation);
//  }
