"use strict"
class Vehicle {
  constructor(vehicleName, numWheels, numPassengers, speedMilesPerHour)
  {
    // private variables

    var self = this;

    // public properties
    this.name = vehicleName;
    this.wheels = numWheels;
    this.passengers = numPassengers;
    this.speed = speedMilesPerHour;
  };

  // private properties
  var distance_travelled = 0;

  // private methods
  // TODO: Make private
  updateDistanceTravelled(){
    //distance_travelled += self.speed;
    distance_travelled = 50;
  }

  // public methods
  makeNoise() {
    console.log("Making lots of noise right now...");
  };

  move(){
    this.updateDistanceTravelled();
    this.makeNoise();
  };

  checkMiles(){
    console.log(distance_travelled);
  }
}
///////////// Testing /////////////////////////

var bike = new Vehicle("Bike", 2, 1, 30);
bike.makeNoise();

bike.makeNoise = function(){ console.log("ring ring!") }
bike.makeNoise();

var sedan = new Vehicle("Sedan", 4, 5, 90);
sedan.makeNoise = function(){ console.log("Honk Honk!") }
sedan.makeNoise();

var bus = new Vehicle("Bus", 4, 30, 70);
bus.addPassengers = function(passengers){
  this.passengers += passengers;
}
bus.addPassengers(20);
console.log(bus.passengers);

bus.move();
bus.checkMiles();
