"use strict" ; // treat all JS CODE as modern version 

// alert("Hello World!"); we are using NODE JS not browser

console.log("Hello World!")
console.log("Welcome to JavaScript")

let name = " Srijal ";
let age = 18;
let isLoggedIn = false;
let state = null

//  number  -------> 2 to power of 53
//  string  -------> " " or ' ' or ` `
//  boolean -------> true or false
//  null ---------> standalone value ( empty value )
// undefined ----> variable that is declared but not assigned any value
// symbol --------> to find uniqueness of the value

// object --------->  it is a collection of key value pair ( it can store multiple values in a single variable )
console.log(typeof name)
console.log(typeof age)

console.table([name, age, isLoggedIn , state])

/*  IMPORTANT NOTE : 
UNDEFINED HAS A DATA TYPE OF UNDEFINED
NULL HAS A DATA TYPE OF OBJECT ( THIS IS A BUG IN JAVASCRIPT BUT IT CAN'T BE CHANGED BECAUSE IT WILL BREAK THE EXISTING CODE ) */

