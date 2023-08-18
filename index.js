function calculateTriangleArea(){
  // //get base
  // const baseInput = document.getElementById('base')
  // const baseInputString = baseInput.value;
  // const baseInputNumber = parseFloat(baseInputString);
  // //get height
  // const heightInput = document.getElementById('height')
  // const heightInputString = heightInput.value;
  // const heightInputNumber = parseFloat(heightInputString);
  // //calculate area
  // const finalOutput = 0.5 * baseInputNumber * heightInputNumber;
  // //show triangle area
  // const setValue = document.getElementById('triangle');
  // setValue.innerText = finalOutput;

  const input1 = getInput1('base');
  const input2 = getInput2('height'); 
  const finalOutput = 0.5 * input1 * input2;
  //show rectangle area
  setFinalValue('triangle',finalOutput);
}
function calculateRectangleArea(){
  // //get base
  // const baseInput = document.getElementById('width')
  // const baseInputString = baseInput.value;
  // const baseInputNumber = parseFloat(baseInputString);
  // //get height
  // const heightInput = document.getElementById('length')
  // const heightInputString = heightInput.value;
  // const heightInputNumber = parseFloat(heightInputString);
  //calculate area
  // const setValue = document.getElementById('rectangle');
  // setValue.innerText = finalOutput;

  const input1 = getInput1('width');
  const input2 = getInput2('length'); 
  const finalOutput = input1 * input2;
  //show rectangle area
  setFinalValue('rectangle',finalOutput);
  
}

function calculateRhombusArea(){
  const input1 = getInput1('first-d');
  const input2 = getInput2('second-d'); 
  const finalOutput =0.5 * input1 * input2;
  //show rectangle area
  setFinalValue('rhombus',finalOutput);
}
function calculatePentagonArea(){
  const input1 = getInput1('first-p');
  const input2 = getInput2('second-b'); 
  const finalOutput =0.5 * input1 * input2;
  //show rectangle area
  setFinalValue('pentagon',finalOutput);
}
function calculateEllipseArea(){
  const input1 = getInput1('first-radius');
  const input2 = getInput2('second-radius'); 
  const finalOutput =3.1416 * input1 * input2;
  //show rectangle area
  setFinalValue('ellipse',finalOutput);
}