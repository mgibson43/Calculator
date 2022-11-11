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

// Updates display
function updateDisplayNum(char) {
  if (current.textContent === '0') {
    current.textContent = char;
  } else {
    isOperated === true ? current.textContent = `${char}` : current.textContent = `${current.textContent}${char}`;
  };
  isOperated = false;
}

function updateDisplayOper(char) {
  isOperated === true ? current.textContent = `ans ${char} ` : current.textContent = `${current.textContent} ${char} `;
  isOperated = false;
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

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
  console.log(a, b);
}

function operate() {
  isOperated = true;
  const dispArr = current.textContent.split(' ').filter(char => char !== ' ');

  while (dispArr.includes('/')) {
    const index = dispArr.indexOf('/');
    dispArr[index - 1] = `${divide(Number(dispArr[index - 1]), Number(dispArr[index + 1]))}`;
    dispArr.splice(index,2);
    console.log(dispArr);
  }

  while (dispArr.includes('x')) {
    const index = dispArr.indexOf('x');
    dispArr[index - 1] = `${multiply(Number(dispArr[index - 1]), Number(dispArr[index + 1]))}`;
    dispArr.splice(index,2);
    console.log(dispArr);
  }

  while (dispArr.includes('+')) {
    const index = dispArr.indexOf('+');
    dispArr[index - 1] = `${add(Number(dispArr[index - 1]), Number(dispArr[index + 1]))}`;
    dispArr.splice(index,2);
    console.log(dispArr);
  }

  while (dispArr.includes('-')) {
    const index = dispArr.indexOf('-');
    dispArr[index - 1] = `${subtract(Number(dispArr[index - 1]), Number(dispArr[index + 1]))}`;
    dispArr.splice(index,2);
    console.log(dispArr);
  }

  current.textContent = dispArr.join('');
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
addition.addEventListener('click', updateDisplayOper.bind(this, addition.textContent));
subtraction.addEventListener('click', updateDisplayOper.bind(this, subtraction.textContent));
multiplication.addEventListener('click', updateDisplayOper.bind(this, multiplication.textContent));
division.addEventListener('click', updateDisplayOper.bind(this, division.textContent));
back.addEventListener('click', backspace);
equals.addEventListener('click', operate);