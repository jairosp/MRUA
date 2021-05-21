import mruSolver from './mrusolver.js';
import dinamicSolver from './dinamicsolver.js';

const velocidadA = document.getElementById('velocidadA');
const velocidadB = document.getElementById('velocidadB');
const distancia = document.getElementById('distancia');
const getResultMRU = document.getElementById('getResultMRU');

const displayMRUOnScreen = document.createElement('p');
const printResultMRU = document.getElementById('printResultMRU');

const masa1 = document.getElementById('masa1');
const masa2 = document.getElementById('masa2');
const coeficient = document.getElementById('coeficient');
const getResultDINAMIC = document.getElementById('getResultDINAMIC');

const displayDINAMICOnScreen = document.createElement('p');
const printResultDINAMIC = document.getElementById('printResultDINAMIC');



getResultMRU.addEventListener('click', displayMRU);

function displayMRU(){
    displayMRUOnScreen.textContent = mruSolver(parseFloat(velocidadA.value), parseFloat(velocidadB.value), parseFloat(distancia.value));
    displayMRUOnScreen.style.color = 'white';
    displayMRUOnScreen.style.textAlign = 'center';


    printResultMRU.appendChild(displayMRUOnScreen);
}

getResultDINAMIC.addEventListener('click', displayDINAMIC)

function displayDINAMIC(){
    displayDINAMICOnScreen.textContent = dinamicSolver(parseFloat(masa1.value), parseFloat(masa2.value), parseFloat(coeficient.value));
    displayDINAMICOnScreen.style.color = 'white';
    displayDINAMICOnScreen.style.textAlign = 'center';

    printResultDINAMIC.appendChild(displayDINAMICOnScreen);
}