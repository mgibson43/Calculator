'use strict'

// Operator/Misc DOM elements
const current = document.querySelector('.display');
const clr = document.querySelector('.clear');
const add = document.querySelector('.addition');
const subtract = document.querySelector('.subtraction');
const multiply = document.querySelector('.multiplication')
const divide = document.querySelector('.division');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

// Number DOM Elements
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');


// Updates display
function updateDisplayNum(char) {
  if (current.textContent === '0') {
    current.textContent = char;
  } else {
    current.textContent = `${current.textContent}${char}`;
  };
}

function updateDisplayOper(char) {
  current.textContent = `${current.textContent} ${char} `;
}

// Clears display
function clear() {
  current.textContent = '0';
}

// Number event listeners
zero.addEventListener('click', updateDisplayNum.bind(this, zero.textContent));
one.addEventListener('click', updateDisplayNum.bind(this, one.textContent));
two.addEventListener('click', updateDisplayNum.bind(this, two.textContent));
three.addEventListener('click', updateDisplayNum.bind(this, three.textContent));
four.addEventListener('click', updateDisplayNum.bind(this, four.textContent));
five.addEventListener('click', updateDisplayNum.bind(this, five.textContent));
six.addEventListener('click', updateDisplayNum.bind(this, six.textContent));
seven.addEventListener('click', updateDisplayNum.bind(this, seven.textContent));
eight.addEventListener('click', updateDisplayNum.bind(this, eight.textContent));
nine.addEventListener('click', updateDisplayNum.bind(this, nine.textContent));
decimal.addEventListener('click', updateDisplayNum.bind(this, decimal.textContent));


// Operator event listeners
clr.addEventListener('click', clear);
add.addEventListener('click', updateDisplayOper.bind(this, add.textContent));
subtract.addEventListener('click', updateDisplayOper.bind(this, subtract.textContent));
multiply.addEventListener('click', updateDisplayOper.bind(this, multiply.textContent));
divide.addEventListener('click', updateDisplayOper.bind(this, divide.textContent));