'use strict'

// Operator/Misc DOM elements
const current = document.querySelector('.display');
const clr = document.querySelector('.clear');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication')
const division = document.querySelector('.division');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const back = document.querySelector('.backspace');
const answer = document.querySelector('.ans');

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

let isOperated = false;
const divideByZero = 'ERROR, CANNOT DIVIDE BY ZERO';
let ans = 0;
const operators = ['+', '-', '/', 'x'];

// Updates display with number
function updateDisplayNum(char) {
  if (current.textContent === '0') {
    current.textContent = char;
  } else {
    isOperated === true ? current.textContent = `${char}` : current.textContent = `${current.textContent}${char}`;
  };
  isOperated = false;
}

// Updates display with operator
function updateDisplayOper(char) {
  isOperated === true ? current.textContent = `ans ${char} ` : current.textContent = `${current.textContent} ${char} `;
  isOperated = false;
}

// Updates display with decimal
function updateDisplayDecimal() {
  const dispArr = current.textContent.split(' ').filter(char => char !== '');
  const lastValueArr = [...dispArr[dispArr.length - 1]];
  current.textContent =  !(lastValueArr.includes(operators)) && !(lastValueArr.includes('.')) ? `${current.textContent}.` : `${current.textContent}`;
}

// Clears display
function clear() {
  current.textContent = '0';
}

// Removes last entry
function backspace() {
  const displayArr = [...current.textContent];
  if (displayArr[displayArr.length-1] === ' ') {
    displayArr.splice(displayArr.length-3, displayArr.length);
  } else {
    displayArr.splice(displayArr.length-1, displayArr.length);
  }

  if (displayArr.length === 0) {
    current.textContent = '0';
  } else {
    current.textContent = displayArr.join('');
  }
}

// Operator functions take string and convert to a number then performs specified operation
function add(a, b) {
  if (a === 'ans') {
    a = ans;
  }
  if (b === 'ans') {
    b = ans;
  }
  a = Number(a);
  b = Number(b);
  return a + b;
}

function subtract(a, b) {
  if (a === 'ans') {
    a = ans;
  }
  if (b === 'ans') {
    b = ans;
  }
  a = Number(a);
  b = Number(b);
  return a - b;
}

function multiply(a, b) {
  if (a === 'ans') {
    a = ans;
  }
  if (b === 'ans') {
    b = ans;
  }
  a = Number(a);
  b = Number(b);
  return a * b;
}

function divide(a, b) {
  if (a === 'ans') {
    a = ans;
  }
  if (b === 'ans') {
    b = ans;
  }
  a = Number(a);
  b = Number(b);
  return b === 0 ? divideByZero : a / b;
}

function operate() {
  isOperated = true;
  const dispArr = current.textContent.split(' ');
  if (dispArr[dispArr.length - 1] === '') return;

  while (dispArr.includes('/')) {
    const index = dispArr.indexOf('/');
    dispArr[index - 1] = `${divide(dispArr[index - 1], dispArr[index + 1])}`;
    dispArr.splice(index,2);
    if (dispArr.includes(divideByZero)) {
      current.textContent = divideByZero;
      return;
    }
  }

  if (dispArr.includes(divideByZero)) return;

  while (dispArr.includes('x')) {
    const index = dispArr.indexOf('x');
    dispArr[index - 1] = `${multiply(dispArr[index - 1], dispArr[index + 1])}`;
    dispArr.splice(index,2);
  }

  while (dispArr.includes('+')) {
    const index = dispArr.indexOf('+');
    dispArr[index - 1] = `${add(dispArr[index - 1], dispArr[index + 1])}`;
    dispArr.splice(index,2);
  }

  while (dispArr.includes('-')) {
    const index = dispArr.indexOf('-');
    dispArr[index - 1] = `${subtract(dispArr[index - 1], dispArr[index + 1])}`;
    dispArr.splice(index,2);
  }

  current.textContent = dispArr.join('');
  console.log(current.textContent);
  ans = Number(current.textContent);
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
decimal.addEventListener('click', updateDisplayDecimal);


// Operator event listeners
clr.addEventListener('click', clear);
addition.addEventListener('click', updateDisplayOper.bind(this, addition.textContent));
subtraction.addEventListener('click', updateDisplayOper.bind(this, subtraction.textContent));
multiplication.addEventListener('click', updateDisplayOper.bind(this, multiplication.textContent));
division.addEventListener('click', updateDisplayOper.bind(this, division.textContent));
back.addEventListener('click', backspace);
equals.addEventListener('click', operate);
answer.addEventListener('click', updateDisplayNum.bind(this, answer.textContent));