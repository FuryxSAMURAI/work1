let sideA = document.getElementById('sideA')
let resA = document.getElementById('resultA')
sideA.value=0
resA.innerHTML = sideA.value
sideA.oninput = function(){
    console.log(sideA.value);
    resA.innerHTML = sideA.value
    equal.innerHTML = resA.textContent * resB.textContent
    res.innerHTML = pi.value * equal.textContent
}
let resTranA = 0 // translate to ...
optionA.onchange = function(){
    if (optionA.value == 'm') {
        resA.textContent = sideA.value
        equal.innerHTML = resA.textContent * resB.textContent
        res.innerHTML = pi.value * equal.textContent
    }else if(optionA.value == 'cm'){
        resTranA = sideA.value
        resTranA /=100
        resA.textContent = resTranA
        equal.innerHTML = resA.textContent * resB.textContent
        res.innerHTML = pi.value * equal.textContent
    }else if(optionA.value == 'mm'){
        resTranA = sideA.value
        resTranA /=1000
        resA.textContent = resTranA
        equal.innerHTML = resA.textContent * resB.textContent
        res.innerHTML = pi.value * equal.textContent
    }
}

let sideB = document.getElementById('sideB')
let resB = document.getElementById('resultB')
sideB.value=0
resB.innerHTML = sideB.value
sideB.oninput = function(){
    resB.innerHTML = sideB.value
    equal.innerHTML = resA.textContent * resB.textContent
    res.innerHTML = pi.value * equal.textContent
    console.log(resB.textContent);
}
let resTranB = 0 // translate to ...
optionB.onchange = function(){
    if (optionB.value == 'm') {
        resB.textContent = sideB.value
        equal.innerHTML = resA.textContent * resB.textContent
        res.innerHTML = pi.value * equal.textContent
    }else if(optionB.value == 'cm'){
        resTranB = sideB.value
        resTranB /=100
        resB.textContent = resTranB
        equal.innerHTML = resA.textContent * resB.textContent
        res.innerHTML = pi.value * equal.textContent
    }else if(optionB.value == 'mm'){
        resTranB = sideB.value
        resTranB /=1000
        resB.textContent = resTranB
        equal.innerHTML = resA.textContent * resB.textContent
        res.innerHTML = pi.value * equal.textContent
    }
    
}

let pi = document.getElementById('pi')
let restPi = document.getElementById('resultPi')
let piTrans = 0 // translate to ...
restPi.innerHTML = pi.value
pi.onchange = function(){    
    restPi.innerHTML = pi.value
    resultPiSecond.innerHTML = pi.value
    res.innerHTML = pi.value * equal.textContent
}

let square = document.getElementById('square')
square.onchange = function(){
    if (pi.value == 'm²') {
        
    }else if(pi.value == 'cm²'){
    
    }else if(pi.value == 'mm²'){
        
    }
    metersOfLengthSquare.innerHTML = square.value
    metersOfLengthSquareSec.innerHTML = square.value
}

let equal = document.getElementById('equal')
let res = document.getElementById('res')
let resultPiSecond = document.getElementById('resultPiSecond')
var metersOfLengthSquare = document.getElementById('metersOfLengthSquare')
var metersOfLengthSquareSec = document.getElementById('metersOfLengthSquareSec')
metersOfLengthSquare.innerHTML = square.value
metersOfLengthSquareSec.innerHTML = square.value
resultPiSecond.innerHTML = pi.value
equal.innerHTML = resA.textContent * resB.textContent
res.innerHTML = pi.value * equal.textContent


// result block

const result = document.getElementById('result')
const block = document.getElementById('containerRes')
const contentBlock = document.getElementById('contentRes')
result.onclick = function(){
    block.style.height = '30%'
    contentBlock.style.opacity = '1'
}

// theory
let theoryBlocks = document.getElementById('theoryBlocks')
let theoryTabOne = document.getElementById('theoryTabOne')
let theoryBlockOne = document.getElementById('theoryBlockOne')
function theoryTabOneFunc() {
    theoryTabOne.style.fontWeight = 'bold'
    theoryTabTwo.style.fontWeight = '400'
    theoryBlockOne.style.cssText = 'display:block'
    theoryBlockTwo.style.cssText = 'display:none'
}
let theoryTabTwo = document.getElementById('theoryTabTwo')
let theoryBlockTwo = document.getElementById('theoryBlockTwo')
function theoryTabTwoFunc() {
    theoryTabOne.style.fontWeight = '400'
    theoryTabTwo.style.fontWeight = 'bold'
    theoryBlockOne.style.cssText = 'display:none'
    theoryBlockTwo.style.cssText = 'display:block'
}