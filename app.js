// https://www.omnicalculator.com/construction/square-yards

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const yardageRadio = document.getElementById('yardageRadio');
const lengthRadio = document.getElementById('lengthRadio');
const widthRadio = document.getElementById('widthRadio');

let yardage;
let length = v1;
let width = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

yardageRadio.addEventListener('click', function() {
  variable1.textContent = 'Length';
  variable2.textContent = 'Width';
  length = v1;
  width = v2;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Yardage';
  variable2.textContent = 'Width';
  yardage = v1;
  width = v2;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'Yardage';
  variable2.textContent = 'Length';
  yardage = v1;
  length = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(yardageRadio.checked)
    result.textContent = `Yardage = ${computeyardage().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;
})

// calculation

// area = length * width

function computeyardage() {
  return (Number(length.value) * Number(width.value)) * 1.196;
}

function computelength() {
  return (Number(yardage.value) / 1.196) / Number(width.value);
}

function computewidth() {
  return (Number(yardage.value) / 1.196) / Number(length.value);
}