'use strict';

//Identifiers
const name = 'Arthur';
const born = 2001;

const greeting = name => {
  console.log(`Hello, ${name}`);
};

greeting('Arthur');
greeting(name);
greeting(born);

//Loop
for (let i = 15; i <= 30; ++i) {
  console.log(i);
}

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

range(5, 10);

//Functions
function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return Math.pow(x, 2);
}

function cube(x) {
  return Math.pow(x, 3);
}

for (let i = 0; i < 10; i++) {
  const squareI = square(i);
  const cubeI = cube(i);
  console.log(average(squareI, cubeI));
}

//Objects

const constObject = {
  name: 'Ivan',
};

let varObject = {
  name: 'Petro',
};

constObject.name = 'Stepan';
varObject.name = 'Yaroslav';


//constObject = {car: 'BMW'}; // We can't assign a new ref to a const object
varObject = { car: 'Mercedes' };

function createUser(name, city) {
  return { name, city };
}

const newUser = createUser('Ivan', 'Kyiv');
console.log({ newUser });

// Arrays

const persons = [
  {
    name: 'Arthur',
    phone: '+352235253',
  },
  {
    name: 'Stepan',
    phone: '+312124'
  },
];

function findPhoneByName(name) {
  for (const person of persons) {
    if (person.name === name) {
      return person.phone;
    }
  }
}

console.log(findPhoneByName('Arthur'));

//Hash-tables

const hash = {
  'Arthur': '+4324234',
  'Stepan': '+235235',
};

console.log(hash['Arthur']);

function findPhoneByNameUsingHash(name) {
  return hash[name];
}

console.log(findPhoneByNameUsingHash('Stepan'));
