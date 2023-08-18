function getInput1(elementId1){
  const baseInput = document.getElementById(elementId1)
  const baseInputString = baseInput.value;
  const baseInputNumber = parseFloat(baseInputString);
  baseInput.value=''
  // return baseInputNumber;
  return baseInputNumber;
  //get height
  
}
function getInput2(elementId2){
  const heightInput = document.getElementById(elementId2)
  const heightInputString = heightInput.value;
  const heightInputNumber = parseFloat(heightInputString);
  heightInput.value=''
  return heightInputNumber;
}

function setFinalValue(elementId3,finalValue){
  const setValue = document.getElementById(elementId3);
  setValue.innerText = finalValue;
}

function addToCalculationEntry(areaType,area){
  console.log(areaType+' '+area);
  const calculationEntry =document.getElementById('calculation-entry')
  const p =document.createElement('p');
  p.innerHTML =`${areaType} ${area} cm`
  calculationEntry.appendChild(p);
}