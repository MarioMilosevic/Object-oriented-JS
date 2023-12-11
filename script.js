// "use strict";

// // Properti instance
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Nikada ovo ne raditi !!!!!!!!!!
//   //   this.calcAge = function(){
//   //     console.log(2023 - this.birthYear);
//   //   }
// };

// Person.hey = function () {
//   console.log("Hey there my nigga");
// };

// Person.hey();
// // const mario = new Person("Mario", 1996);
// // console.log(mario);

// // // 1. Novi {} je napravljen
// // // 2. funkcija je pozvana this = napravljeni objekat
// // // 3. {} je povezan za prototipom
// // // 4. funkcija automatski vraca {}

// // const milica = new Person("Milica", 1988);
// // const toni = new Person("Toni", 1994);
// // console.log(milica,toni);

// // console.log(mario instanceof Person)

// // // Prototipi
// // console.log(Person.prototype);
// // Person.prototype.calcAge = function(){
// //     console.log(2023 - this.birthYear);
// //   }

// // mario.calcAge()
// // milica.calcAge()
// // toni.calcAge()
// // console.log(mario.__proto__);
// // console.log(mario.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(mario));
// // console.log(Person.prototype.isPrototypeOf(milica));
// // console.log(Person.prototype.isPrototypeOf(toni));

// // console.log(Person.prototype.isPrototypeOf(Person));

// // Person.prototype.species = 'Homo Sapiens'
// // console.log(mario,toni);

// // console.log(mario.hasOwnProperty('firstName'));
// // console.log(mario.hasOwnProperty('species'));

// // console.log(mario.__proto__.__proto__.__proto__);

// // const arr = [3,5,1,4,87,464,13,4,1,31,46,34,3,34]
// // console.log(arr.__proto__);

// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   console.log(this.speed += 10);
// // };

// // Car.prototype.brake = function () {
// //   console.log(this.speed -= 5);
// // };

// // const bmw = new Car('BMW',120)
// // const mercedes = new Car('Mercedes',95)

// // bmw.accelerate()
// // bmw.accelerate()
// // bmw.accelerate()
// // bmw.brake()

// // mercedes.accelerate()
// // mercedes.accelerate()
// // mercedes.brake()

// // class expression
// // const PersonCl = class {

// // }

// //class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert("No last name");
//   }

//   static hey() {
//     console.log("Hey there my nigga");
//   }
// }

// const mario = new PersonCl("mario milosevic", 1996);
// console.log(mario);
// mario.calcAge();
// mario.greet();
// // 1. Classes are not hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict-mode

// const account = {
//   owner: "mario",
//   movements: [2000, 300, 4050, 540],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.set = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
// };

// const mario2 = Object.create(PersonProto);
// mario2.name = "Mario"
// mario2.birthYear = 1996
// mario2.calcAge()
// console.log(mario2);
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
   this.speed = speed *1.6
  }
}

const ford = new Car("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
console.log( ford.speedUS = 50)

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   console.log(this.speed += 10);
// // };

// // Car.prototype.brake = function () {
// //   console.log(this.speed -= 5);
// // };

// // const bmw = new Car('BMW',120)
// // const mercedes = new Car('Mercedes',95)
