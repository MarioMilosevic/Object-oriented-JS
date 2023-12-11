"use strict";

const Person = function (firstName, birthYear) {
    // Properti instance
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Nikada ovo ne raditi !!!!!!!!!!
  this.calcAge = function(){
    console.log(2023 - this.birthYear);
  }
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