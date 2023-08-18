function calculateTriangleArea(){
  //get base
  const baseInput = document.getElementById('base')
  const baseInputString = baseInput.value;
  const baseInputNumber = parseFloat(baseInputString);
  //get height
  const heightInput = document.getElementById('height')
  const heightInputString = heightInput.value;
  const heightInputNumber = parseFloat(heightInputString);
  //calculate area
  const finalOutput = 0.5 * baseInputNumber * heightInputNumber;
  //show triangle area
  const setValue = document.getElementById('triangle');
  setValue.innerText = finalOutput;
}
function calculateRectangleArea(){
  //get base
  const baseInput = document.getElementById('width')
  const baseInputString = baseInput.value;
  const baseInputNumber = parseFloat(baseInputString);
  //get height
  const heightInput = document.getElementById('length')
  const heightInputString = heightInput.value;
  const heightInputNumber = parseFloat(heightInputString);
  //calculate area
  const finalOutput = baseInputNumber * heightInputNumber;
  //show rectangle area
  const setValue = document.getElementById('rectangle');
  setValue.innerText = finalOutput;
}