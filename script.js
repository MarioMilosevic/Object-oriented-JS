// // // "use strict";

// // // // Properti instance
// // // const Person = function (firstName, birthYear) {
// // //   this.firstName = firstName;
// // //   this.birthYear = birthYear;

// // //   // Nikada ovo ne raditi !!!!!!!!!!
// // //   //   this.calcAge = function(){
// // //   //     console.log(2023 - this.birthYear);
// // //   //   }
// // // };

// // // Person.hey = function () {
// // //   console.log("Hey there my nigga");
// // // };

// // // Person.hey();
// // // // const mario = new Person("Mario", 1996);
// // // // console.log(mario);

// // // // // 1. Novi {} je napravljen
// // // // // 2. funkcija je pozvana this = napravljeni objekat
// // // // // 3. {} je povezan za prototipom
// // // // // 4. funkcija automatski vraca {}

// // // // const milica = new Person("Milica", 1988);
// // // // const toni = new Person("Toni", 1994);
// // // // console.log(milica,toni);

// // // // console.log(mario instanceof Person)

// // // // // Prototipi
// // // // console.log(Person.prototype);
// // // // Person.prototype.calcAge = function(){
// // // //     console.log(2023 - this.birthYear);
// // // //   }

// // // // mario.calcAge()
// // // // milica.calcAge()
// // // // toni.calcAge()
// // // // console.log(mario.__proto__);
// // // // console.log(mario.__proto__ === Person.prototype);

// // // // console.log(Person.prototype.isPrototypeOf(mario));
// // // // console.log(Person.prototype.isPrototypeOf(milica));
// // // // console.log(Person.prototype.isPrototypeOf(toni));

// // // // console.log(Person.prototype.isPrototypeOf(Person));

// // // // Person.prototype.species = 'Homo Sapiens'
// // // // console.log(mario,toni);

// // // // console.log(mario.hasOwnProperty('firstName'));
// // // // console.log(mario.hasOwnProperty('species'));

// // // // console.log(mario.__proto__.__proto__.__proto__);

// // // // const arr = [3,5,1,4,87,464,13,4,1,31,46,34,3,34]
// // // // console.log(arr.__proto__);

// // // // Coding Challenge #1

// // // /*
// // // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // // DATA CAR 1: 'BMW' going at 120 km/h
// // // DATA CAR 2: 'Mercedes' going at 95 km/h

// // // GOOD LUCK 😀
// // // */

// // // // const Car = function (make, speed) {
// // // //   this.make = make;
// // // //   this.speed = speed;
// // // // };

// // // // Car.prototype.accelerate = function () {
// // // //   console.log(this.speed += 10);
// // // // };

// // // // Car.prototype.brake = function () {
// // // //   console.log(this.speed -= 5);
// // // // };

// // // // const bmw = new Car('BMW',120)
// // // // const mercedes = new Car('Mercedes',95)

// // // // bmw.accelerate()
// // // // bmw.accelerate()
// // // // bmw.accelerate()
// // // // bmw.brake()

// // // // mercedes.accelerate()
// // // // mercedes.accelerate()
// // // // mercedes.brake()

// // // // class expression
// // // // const PersonCl = class {

// // // // }

// // // //class declaration

// // // class PersonCl {
// // //   constructor(fullName, birthYear) {
// // //     this.fullName = fullName;
// // //     this.birthYear = birthYear;
// // //   }

// // //   calcAge() {
// // //     console.log(2023 - this.birthYear);
// // //   }
// // //   greet() {
// // //     console.log(`Hey ${this.firstName}`);
// // //   }

// // //   get age() {
// // //     return 2023 - this.birthYear;
// // //   }

// // //   set fullName(name) {
// // //     if (name.includes(" ")) this._fullName = name;
// // //     else alert("No last name");
// // //   }

// // //   static hey() {
// // //     console.log("Hey there my nigga");
// // //   }
// // // }

// // // const mario = new PersonCl("mario milosevic", 1996);
// // // console.log(mario);
// // // mario.calcAge();
// // // mario.greet();
// // // // 1. Classes are not hoisted
// // // // 2. Classes are first-class citizens
// // // // 3. Classes are executed in strict-mode

// // // const account = {
// // //   owner: "mario",
// // //   movements: [2000, 300, 4050, 540],

// // //   get latest() {
// // //     return this.movements.slice(-1).pop();
// // //   },
// // //   set latest(mov) {
// // //     this.movements.push(mov);
// // //   },
// // // };

// // // console.log(account.latest);
// // // account.set = 50;
// // // console.log(account.movements);

// // // const PersonProto = {
// // //   calcAge() {
// // //     console.log(2023 - this.birthYear);
// // //   },
// // // };

// // // const mario2 = Object.create(PersonProto);
// // // mario2.name = "Mario"
// // // mario2.birthYear = 1996
// // // mario2.calcAge()
// // // console.log(mario2);
// // ///////////////////////////////////////
// // // Coding Challenge #2

// // /*
// // 1. Re-create challenge 1, but this time using an ES6 class;
// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// // 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// // DATA CAR 1: 'Ford' going at 120 km/h

// // GOOD LUCK 😀
// // */

// // // class Car {
// // //   constructor(make, speed) {
// // //     this.make = make;
// // //     this.speed = speed;
// // //   }

// // //   accelerate() {
// // //     this.speed += 10;
// // //     console.log(`${this.make} is going at ${this.speed} km/h`);
// // //   }

// // //   brake() {
// // //     this.speed -= 5;
// // //     console.log(`${this.make} is going at ${this.speed} km/h`);
// // //   }

// // //   get speedUS() {
// // //     return this.speed / 1.6;
// // //   }

// // //   set speedUS(speed) {
// // //    this.speed = speed *1.6
// // //   }
// // // }

// // // const ford = new Car("Ford", 120);
// // // console.log(ford.speedUS);
// // // ford.accelerate();
// // // ford.accelerate();
// // // ford.accelerate();
// // // ford.brake();
// // // console.log( ford.speedUS = 50)

// // // // const Car = function (make, speed) {
// // // //   this.make = make;
// // // //   this.speed = speed;
// // // // };

// // // // Car.prototype.accelerate = function () {
// // // //   console.log(this.speed += 10);
// // // // };

// // // // Car.prototype.brake = function () {
// // // //   console.log(this.speed -= 5);
// // // // };

// // // // const bmw = new Car('BMW',120)

// // // // const mercedes = new Car('Mercedes',95)

// // // const Person = function (firstName, birthYear) {
// // //   this.firstName = firstName;
// // //   this.birthYear = birthYear;
// // // };

// // // Person.prototype.calcAge = function () {
// // //   console.log(2023 - this.birthYear);
// // // };

// // // const Student = function (firstName, birthYear, course) {
// // //   Person.call(this, firstName, birthYear);
// // //   this.course = course;
// // // };
// // // // Linking prototypes
// // // Student.prototype = Object.create(Person.prototype)

// // // Student.prototype.introduce = function () {
// // //   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// // // };

// // // const mike = new Student("Mike", 2000, "Computer science");
// // // console.log(mike);
// // // mike.introduce();
// // // mike.calcAge()

// // // Coding Challenge #3

// // /*
// // 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// // 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// // 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// // 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// // DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// // GOOD LUCK 😀
// // */

// // // const Car = function (make, speed) {
// // //   this.make = make;
// // //   this.speed = speed;
// // // };

// // // const EV = function (make, speed, charge) {
// // //   Car.call(this, make, speed);
// // //   this.charge = charge;
// // // };
// // // EV.prototype = Object.create(Car.prototype);

// // // EV.prototype.chargeBattery = function (chargeTo) {
// // //   this.charge = chargeTo;
// // // };

// // // EV.prototype.accelerate = function () {
// // //   this.speed += 20;
// // //   this.charge -= 1;
// // //   console.log(
// // //     `${this.make} going at ${this.speed} with battery charge of ${this.charge}%`
// // //   );
// // // };

// // // const tesla = new EV("Tesla", 120, 23);
// // // tesla.accelerate();
// // // tesla.chargeBattery(90);

// // // class PersonCl {
// // //   constructor(fullName, birthYear) {
// // //     this.fullName = fullName;
// // //     this.birthYear = birthYear;
// // //   }

// // //   calcAge() {
// // //     console.log(2023 - this.birthYear);
// // //   }
// // //   greet() {
// // //     console.log(`Hey ${this.firstName}`);
// // //   }

// // //   get age() {
// // //     return 2023 - this.birthYear;
// // //   }

// // //   set fullName(name) {
// // //     if (name.includes(" ")) this._fullName = name;
// // //     else alert("No last name");
// // //   }

// // //   static hey() {
// // //     console.log("Hey there my nigga");
// // //   }
// // // }

// // // class StudentCl extends PersonCl{
// // //   constructor(fullName, birthYear, course){
// // //     super(fullName, birthYear)
// // //     this.course = course
// // //   }

// // //   introduce(){
// // //       console.log(`My name is ${this.fullName} and I study ${this.course}`);
// // //       console.log(this.fullName);
// // //     };

// // //     calcAge(){
// // //       console.log(`I am ${2023 - this.birthYear} years old but as a student I feel more lika ${2023 - this.birthYear + 10}`);
// // //     }
// // // }

// // // const mario = new StudentCl('Mario Milosevic',1996, 'JavaScript' )

// // // mario.introduce()

// // const PersonProto = {
// //   calcAge() {
// //     console.log(2023 - this.birthYear);
// //   },

// //   init(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steven = Object.create(PersonProto);

// // const StudentProto = Object.create(PersonProto);
// // StudentProto.init = function (firstName, birthYear, course) {
// //   PersonProto.init.call(this, firstName, birthYear);
// //   this.course = course;
// // };

// // StudentProto.introduce = function(){
// //   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// // }

// // const jay = Object.create(StudentProto);
// // jay.init('Jay', 2000, 'CS')
// // jay.introduce()
// // jay.calcAge()

// // Public fields
// // Private fields
// // Public methods
// // Private methods

// class Account {
//   // Public fields
//   locale = navigator.language;
//   _movements = [];

//   // Private fields
//   #movements = []

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected property
//     this._pin = pin;
//     // this._movements = [];
//     // this.colace = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }
//   Public interface

//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraval(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account("Mario", "EUR", 1111);
// // Ne ovako !
// // acc1.movements.push(250)
// // acc1.movements.push(-100)
// acc1.deposit(250);
// acc1.withdraval(140);
// acc1._approveLoan();
// console.log(acc1.getMovements());
// console.log(acc1);
// console.log(acc1._pin);

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
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
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
// treba nam count i trebaju nam 2 funckije,
// 1. getCount koja vraca trenutnu vrijednost kaunta
// 2. koja ce da inkrementuje kaunt za 1
// 3. da setuje kaunt na koju god vrijednost hocemo

// const countCreator = () => {
//   let count = 0;
//   const getCount = () => count;
//   const incrementCount = () => (count += 1);
//   const setCount = (num) => (count = num);

//   return {
//     count,
//     getCount,
//     incrementCount,
//     setCount,
//   };
// };

// const id = document.querySelector(".id");

// let nova = countCreator();

// nova.incrementCount();
// nova.incrementCount();
// nova.incrementCount();
// nova.incrementCount();

// id.textContent = nova.count;

const monsterCreator = (monster) => {
  let numberOfKills = 0;
  const walk = () => console.log(`${monster} walks`);
  const attack = () => console.log(`${monster} attacks`);
  const kill = () =>
    console.log(`${monster} has killed ${(numberOfKills += 1)}`);
  const setNumberOfKills = (num) =>
    console.log(`Number of kills is set to: ${(numberOfKills = num)}`);

  return {
    walk,
    attack,
    kill,
    setNumberOfKills,
  };
};

const mario = monsterCreator("Mario");
const milica = monsterCreator("Milica");
mario.attack();
mario.walk();
mario.kill();
mario.kill();
mario.kill();
mario.kill();
mario.kill();

milica.walk();
milica.attack();
milica.kill();

milica.setNumberOfKills(5);
