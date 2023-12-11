"use strict";

// Properti instance
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// Nikada ovo ne raditi !!!!!!!!!!
//   this.calcAge = function(){
//     console.log(2023 - this.birthYear);
//   }
// };

// const mario = new Person("Mario", 1996);
// console.log(mario);

// // 1. Novi {} je napravljen
// // 2. funkcija je pozvana this = napravljeni objekat
// // 3. {} je povezan za prototipom
// // 4. funkcija automatski vraca {}

// const milica = new Person("Milica", 1988);
// const toni = new Person("Toni", 1994);
// console.log(milica,toni);

// console.log(mario instanceof Person)

// // Prototipi
// console.log(Person.prototype);
// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear);
//   }

// mario.calcAge()
// milica.calcAge()
// toni.calcAge()
// console.log(mario.__proto__);
// console.log(mario.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(mario));
// console.log(Person.prototype.isPrototypeOf(milica));
// console.log(Person.prototype.isPrototypeOf(toni));

// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens'
// console.log(mario,toni);

// console.log(mario.hasOwnProperty('firstName'));
// console.log(mario.hasOwnProperty('species'));

// console.log(mario.__proto__.__proto__.__proto__);

// const arr = [3,5,1,4,87,464,13,4,1,31,46,34,3,34]
// console.log(arr.__proto__);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed += 10);
};

Car.prototype.brake = function () {
  console.log(this.speed -= 5);
};

const bmw = new Car('BMW',120)
const mercedes = new Car('Mercedes',95)

bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.brake()

mercedes.accelerate()
mercedes.accelerate()
mercedes.brake()
