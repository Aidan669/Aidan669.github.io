var numOne;
var numTwo;
function add(){
numOne = document.getElementById('numOne').value;
numTwo = document.getElementById('numTwo').value;

numOne = getValue(numOne);
numTwo = getValue(numTwo);
result = numOne + numTwo;

document.getElementById('result').innerHTML = result;

}

function getValue(resolve){
if(resolve == "one"){resolve = 1;}
if(resolve == "two"){resolve = 2;}
if(resolve == "three"){resolve = 3;}
if(resolve == "four"){resolve = 4;}
if(resolve == "five"){resolve = 5;}

return resolve;
}



function subtract(){
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;

  numOne = getValue(numOne);
  numTwo = getValue(numTwo);
  result = numOne - numTwo;

  document.getElementById('result').innerHTML = result;
}
function getValue(resolve){
if(resolve == "one"){resolve = 1;}
if(resolve == "two"){resolve = 2;}
if(resolve == "three"){resolve = 3;}
if(resolve == "four"){resolve = 4;}
if(resolve == "five"){resolve = 5;}

return resolve;
}


function divide(){
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;

  numOne = getValue(numOne);
  numTwo = getValue(numTwo);
  result = numOne / numTwo;

  document.getElementById('result').innerHTML = result;
}


function multiply(){
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;

  numOne = getValue(numOne);
  numTwo = getValue(numTwo);
  result = numOne * numTwo;

  document.getElementById('result').innerHTML = result;
}
