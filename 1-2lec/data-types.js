'use strict';

//Hoisting
function hoist() {
  // eslint-disable-next-line prefer-const
  let a;
  console.log(a);
  a = 5;
}

hoist();


//Primitive and Reference data types
function inc1(n) {
  return ++n;
}

const a = 5;
const b = inc1(a);

console.dir({ a, b });

function inc2(num) {
  num.n++;
}

const obj = { n: 5 };
inc2(obj);

console.dir({ obj });

// Object types


const newArray = [
  {
    name: 'Ivan',
    lastName: 'Stepanenko',
  },
  5,
  'just a string',
  true,
  false,
  'word',
  false,
  10,
];


const objOfTypes1 = {
  number: 0,
  string: 0,
  object: 0,
  boolean: 0,
  null: 0,
  undefined: 0,
};


for (const o of newArray) {
  objOfTypes1[typeof o]++;
}

const objOfTypes2 = {};

for (const o of newArray) {
  const type = typeof o;
  if (type in objOfTypes2) {
    objOfTypes2[type]++;
  } else {
    objOfTypes2[typeof o] = 1;
  }
}

console.log({ objOfTypes1 });
console.log({ objOfTypes2 });
