'use strict'


function search(array, target) {
  for(let i =0; i< input.length; i++){
    if(input[i]== target){
      return i;
    }
  }
}

function sort(array) {
  for(let i=0; i< input.length-1; i++){
    for(let j=i+1; j<input.length; j++){
      if(input[i]>input[j]){
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input; 
}

function rawArray(value) {
  var array = [];
  for(var i = 0; i < value; i++){
    array[i] = Math.floor(Math.random()*101);
  }
  sort(array);
  return array;
}

function generate(arrayData){
  var testCase = [];
  for(var i = 0; i < arrayData.length - 3; i++){
    let randomNum = Math.floor(Math.random()*101);
    var array = rawArray(arrayData[i]);
    var x = {
      input: array,
      target: randomNum, 
      output: search(array, randomNum)
    }
    testCase.push(x);
  }
  //special case
  //first index 
  array = rawArray(arrayData[arrayData.length - 3])
  x = {
    input: array,
      target: array[0], 
      output: search(array, array[0])
  }
  testCase.push(x);
  //last index
  array = rawArray(arrayData[arrayData.length - 2])
  x = {
    input: array,
      target: array[array.length - 1], 
      output: search(array, array[array.length - 1])
  }
  testCase.push(x);

  //not found 
  array = rawArray(arrayData[arrayData.length - 1])
  //var maxRange = Math.max.apply(Math, array);
  x = {
    input: array,
    target: array[array.length], 
    output: search(array, array[array.length])
  }
  testCase.push(x);
  
  return testCase;
}
// source Tieu Hoa
module.exports = generate
