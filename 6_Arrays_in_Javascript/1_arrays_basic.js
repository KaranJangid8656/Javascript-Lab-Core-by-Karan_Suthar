// In javascript , arrays can hold any type of data such as numbers ,strings , objects etc
// An array in javascript is an object
// An array holds many values under a single name

const { kMaxLength } = require("buffer")

// Creating an empty array
let a = []
console.log(a)
 
// Creating an array and initializing it with values 
let b = [10,20,30]
console.log(b)

// Basic operations in Javascript Arrays

// Accessing an element from an array using array index
let c = ["html" , "css" , "javascript"]
console.log(c[2])

// Acccesing the last element of array

let d = [10,20,30]
let last = d[d.length - 1]
console.log(last)

// Modifying array elements

let m = ["a","b","c","d"]
console.log(m)

m[1] = "k"
console.log(m)
