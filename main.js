let blockTranslate = document.getElementById('blockTranslate')
let transleteA = document.getElementById('transleteA')
let transleteB = document.getElementById('transleteB')
let resultA = document.getElementById('resultA')
let sideA = document.getElementById('sideA')
let optionA = document.getElementById('optionA')
sideA.value = 0
sideA.oninput = function(){
    console.log('sideA - '+sideA.value);
    resultA.innerHTML = sideA.value
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = pi.value * resultA.textContent * resultB.textContent;
}
let metersA = ''
let metersATransate = 0
let resATrtans = document.getElementById('resATrtans')
let resAMeters = document.getElementById('resAMeters')
let resATrtanslteded = document.getElementById('resATrtanslteded')
let resAMetersTrtanslteded = document.getElementById('resAMetersTrtanslteded')
optionA.onchange = function(){
    if (optionA.value == 'm') {
        metersA = 'м'
        metersATransate = sideA.value
        blockTranslate.style.display = 'none'
        transleteA.style.display = 'none'
        resultA.innerHTML = sideA.value
    }
    if (optionA.value == 'cm') {
        metersA = 'см'
        metersATransate = sideA.value / 100
        transleteA.style.display = 'block'
        blockTranslate.style.display = 'block'
        resATrtans.innerHTML = sideA.value
        resAMeters.innerHTML = metersA
        resATrtanslteded.innerHTML = metersATransate
        resultA.innerHTML = metersATransate
        resAMetersTrtanslteded.innerHTML = 'м'
    }
    if (optionA.value == 'mm') {
        metersA = 'мм'
        metersATransate = sideA.value / 1000
        blockTranslate.style.display = 'block'
        resATrtans.innerHTML = sideA.value
        resAMeters.innerHTML = metersA
        resATrtanslteded.innerHTML = metersATransate
        resultA.innerHTML = metersATransate
        resAMetersTrtanslteded.innerHTML = 'м'
    }
    if (optionB.value != 'm' && optionA.value == 'm') {
        blockTranslate.style.display = 'block'
        transleteA.style.display = 'none'
    }
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = pi.value * resultA.textContent * resultB.textContent;
    console.log('metersATransate - '+metersATransate);
    console.log('resultA - '+resultA.textContent);
}
let resultB = document.getElementById('resultB')
let sideB = document.getElementById('sideB')
let optionB = document.getElementById('optionB')
sideB.value = 0
sideB.oninput = function(){
    console.log('sideB - '+sideB.value);
    resultB.innerHTML = sideB.value
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = pi.value * resultA.textContent * resultB.textContent;
}
let metersB = ''
let metersBTransate = 0
let resBTrtans = document.getElementById('resBTrtans')
let resBMeters = document.getElementById('resBMeters')
optionB.onchange = function(){
    if (optionB.value == 'm') {
        metersB = 'м'
        metersBTransate = sideB.value
        blockTranslate.style.display = 'none'
        transleteB.style.display = 'none'
        resultB.innerHTML = sideB.value
    }
    if (optionB.value == 'cm') {
        metersB = 'см'
        metersBTransate = sideB.value / 100
        blockTranslate.style.display = 'block'
        transleteB.style.display = 'block'
        resBTrtans.innerHTML =  sideB.value
        resBMeters.innerHTML =  metersB
        resBTrtanslteded.innerHTML =  metersBTransate
        resultB.innerHTML = metersBTransate
        resBMetersTrtanslteded.innerHTML =  'м'
    }
    if (optionB.value == 'mm') {
        metersB = 'мм'
        metersBTransate = sideB.value / 1000
        blockTranslate.style.display = 'block'
        transleteB.style.display = 'block'
        resBTrtans.innerHTML =  sideB.value
        resBMeters.innerHTML =  metersB
        resBTrtanslteded.innerHTML =  metersBTransate
        resultB.innerHTML = metersBTransate
        resBMetersTrtanslteded.innerHTML =  'м'
    }
    if (optionB.value == 'm' && optionA.value != 'm') {
        blockTranslate.style.display = 'block'
        transleteB.style.display = 'none'
    }
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = pi.value * resultA.textContent * resultB.textContent;
    console.log('metersBTransate - '+metersBTransate);
}

let pi = document.getElementById('pi')
let resultPiSec = document.getElementById('resultPiSec')
pi.onchange = function(){
    console.log('pi selected - '+pi.value);
    res.innerHTML = pi.value * resultA.textContent * resultB.textContent;
}

let equal = document.getElementById('equal');
let res = document.getElementById('res');
equal.innerHTML = resultA.textContent * resultB.textContent;
res.innerHTML = pi.value * resultA.textContent * resultB.textContent;

let resultTitle = document.getElementById('resultTitle')
resultTitle.innerHTML = 'Перетворимо всі одиниці виміру довжини в метри:'
let square = document.getElementById('square')
let metersOfLengthSquare = document.getElementById('metersOfLengthSquare')
let metersOfLengthSquareSec = document.getElementById('metersOfLengthSquareSec')
metersOfLengthSquare.innerHTML = square.value
metersOfLengthSquareSec.innerHTML = square.value
square.onchange = function(){
    if (square.value == 'm²') {
        resultTitle.innerHTML = 'Перетворимо всі одиниці виміру довжини в метри:'
        blockTranslate.style.display = 'none'
        transleteA.style.display = 'none'
        transleteB.style.display = 'none'
        resultA.innerHTML = sideA.value
        resultB.innerHTML = sideB.value
    }
    if (square.value == 'cm²') {
        resultTitle.innerHTML = 'Перетворимо всі одиниці виміру довжини в сантиметри:'
        blockTranslate.style.display = 'block'
        transleteA.style.display = 'block'
        transleteB.style.display = 'block'
        
        metersA = 'см'
        metersATransate = sideA.value * 100
        resATrtans.innerHTML =  sideA.value
        resAMeters.innerHTML =  'м'
        resATrtanslteded.innerHTML =  metersATransate
        resultA.innerHTML = metersATransate
        resAMetersTrtanslteded.innerHTML =  metersA
        
        metersB = 'см'
        metersBTransate = sideB.value * 100
        resBTrtans.innerHTML =  sideB.value
        resBMeters.innerHTML =  'м'
        resBTrtanslteded.innerHTML =  metersBTransate
        resultB.innerHTML = metersBTransate
        resBMetersTrtanslteded.innerHTML =  metersB
    }
    if (square.value == 'mm²') {
        resultTitle.innerHTML = 'Перетворимо всі одиниці виміру довжини в міліметри:'
        blockTranslate.style.display = 'block'
        transleteA.style.display = 'block'
        transleteB.style.display = 'block'

        metersA = 'мм'
        metersATransate = sideA.value * 1000
        resATrtans.innerHTML =  sideA.value
        resAMeters.innerHTML =  'м'
        resATrtanslteded.innerHTML =  metersATransate
        resultA.innerHTML = metersATransate
        resAMetersTrtanslteded.innerHTML =  metersA
    
        metersB = 'мм'
        metersBTransate = sideB.value * 1000
        resBTrtans.innerHTML =  sideB.value
        resBMeters.innerHTML =  'м'
        resBTrtanslteded.innerHTML =  metersBTransate
        resultB.innerHTML = metersBTransate
        resBMetersTrtanslteded.innerHTML =  metersB
    }
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = pi.value * resultA.textContent * resultB.textContent;
    console.log('square = ' + square.value);
    metersOfLengthSquare.innerHTML = square.value
    metersOfLengthSquareSec.innerHTML = square.value        
}

// result block

const result = document.getElementById("result");
const block = document.getElementById("containerRes");
const contentBlock = document.getElementById("contentRes");
result.onclick = function () {
  block.style.height = "30%";
  contentBlock.style.opacity = "1";
};

// theory
let theoryBlocks = document.getElementById("theoryBlocks");
let theoryTabOne = document.getElementById("theoryTabOne");
let theoryBlockOne = document.getElementById("theoryBlockOne");
function theoryTabOneFunc() {
  theoryTabOne.style.fontWeight = "bold";
  theoryTabTwo.style.fontWeight = "400";
  theoryBlockOne.style.cssText = "display:block";
  theoryBlockTwo.style.cssText = "display:none";
}
let theoryTabTwo = document.getElementById("theoryTabTwo");
let theoryBlockTwo = document.getElementById("theoryBlockTwo");
function theoryTabTwoFunc() {
  theoryTabOne.style.fontWeight = "400";
  theoryTabTwo.style.fontWeight = "bold";
  theoryBlockOne.style.cssText = "display:none";
  theoryBlockTwo.style.cssText = "display:block";
}
