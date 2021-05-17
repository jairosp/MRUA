import problemSolver from './solver.js';

const velocidadA = document.getElementById('velocidadA');
const velocidadB = document.getElementById('velocidadB');
const distancia = document.getElementById('distancia');
const getResultButton = document.getElementById('getResult');
const displayResultOnScreen = document.createElement('p');
const printResult = document.getElementById('printResult');

getResultButton.addEventListener('click', displayResult);

function displayResult(){
    displayResultOnScreen.textContent = problemSolver(parseFloat(velocidadA.value), parseFloat(velocidadB.value), parseFloat(distancia.value));
    displayResultOnScreen.style.color = 'white';
    displayResultOnScreen.style.fontSize = '1.8rem';
    displayResultOnScreen.style.textAlign = 'center';


    printResult.appendChild(displayResultOnScreen);
}