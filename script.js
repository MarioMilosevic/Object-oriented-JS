"use strict";

// Properti instance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Nikada ovo ne raditi !!!!!!!!!!
//   this.calcAge = function(){
//     console.log(2023 - this.birthYear);
//   }
};

const mario = new Person("Mario", 1996);
console.log(mario);

// 1. Novi {} je napravljen
// 2. funkcija je pozvana this = napravljeni objekat
// 3. {} je povezan za prototipom
// 4. funkcija automatski vraca {}

const milica = new Person("Milica", 1988);
const toni = new Person("Toni", 1994);
console.log(milica,toni);

console.log(mario instanceof Person)

// Prototipi
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear);
  }

  // mario.calcAge()
  // milica.calcAge()
  // toni.calcAge()
console.log(mario.__proto__);
console.log(mario.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mario));
console.log(Person.prototype.isPrototypeOf(milica));
console.log(Person.prototype.isPrototypeOf(toni));

console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens'
console.log(mario,toni);

console.log(mario.hasOwnProperty('firstName'));
console.log(mario.hasOwnProperty('species'));

console.log(mario.__proto__.__proto__.__proto__);

const arr = [3,5,1,4,87,464,13,4,1,31,46,34,3,34]
console.log(arr.__proto__);