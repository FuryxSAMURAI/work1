let sideA = document.getElementById("sideA");
let resultA = document.getElementById("resultA");
let blockTranslate = document.getElementById("blockTranslate");
let resATrtans = document.getElementById("resATrtans");
let resAMeters = document.getElementById("resAMeters");
let resATrtanslteded = document.getElementById("resATrtanslteded");
let resAMetersTrtanslteded = document.getElementById("resAMetersTrtanslteded");

sideA.value = 0;
resultA.innerHTML = sideA.value;
sideA.oninput = function () {
  console.log("sideA = " + sideA.value);
  resultA.innerHTML = sideA.value;
  equal.innerHTML = resultA.textContent * resultB.textContent;
  res.innerHTML = resultPiSec.textContent * equal.textContent;
};
let sideAmeters = document.getElementById("optionA");
let metersATranlated = 0;
sideAmeters.onchange = function () {
  if (sideAmeters.value == "m") {
    metersATranlated = sideA.value;
    blockTranslate.style.display = "none";
    resultA.innerHTML = metersATranlated;
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = resultPiSec.textContent * equal.textContent;
  }
  if (sideAmeters.value == "cm") {
    console.log(sideAmeters.value);
    blockTranslate.style.display = "block";
    resATrtans.innerHTML = sideA.value;
    resAMeters.innerHTML = "см";
    resATrtanslteded.innerHTML = sideA.value / 100;
    resAMetersTrtanslteded.innerHTML = "м";

    metersATranlated = sideA.value / 100;
    resultA.innerHTML = metersATranlated;
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = resultPiSec.textContent * equal.textContent;
  }
  if (sideAmeters.value == "mm") {
    blockTranslate.style.display = "block";
    resATrtans.innerHTML = sideA.value;
    resAMeters.innerHTML = "мм";
    resATrtanslteded.innerHTML = sideA.value / 1000;
    resAMetersTrtanslteded.innerHTML = "м";

    metersATranlated = sideA.value / 1000;
    resultA.innerHTML = metersATranlated;
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = resultPiSec.textContent * equal.textContent;
  }
  console.log("sideAmeters trans = " + metersATranlated);
};

let sideB = document.getElementById("sideB");
let resultB = document.getElementById("resultB");
let resBTrtans = document.getElementById("resBTrtans");
let resBMeters = document.getElementById("resBMeters");
let resBTrtanslteded = document.getElementById("resBTrtanslteded");
let resBMetersTrtanslteded = document.getElementById("resBMetersTrtanslteded");

sideB.value = 0;
resultB.innerHTML = sideB.value;
sideB.oninput = function () {
  console.log("sideB = " + sideB.value);
  resultB.innerHTML = sideB.value;
  equal.innerHTML = resultA.textContent * resultB.textContent;
  res.innerHTML = resultPiSec.textContent * equal.textContent;
};
let sideBmeters = document.getElementById("optionB");
let metersBTranlated = 0;
sideBmeters.onchange = function () {
  if (sideBmeters.value == "m") {
    blockTranslate.style.display = "none";
    metersBTranlated = sideB.value;
    resultB.innerHTML = metersBTranlated;
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = resultPiSec.textContent * equal.textContent;
  }
  if (sideBmeters.value == "cm") {
    blockTranslate.style.display = "block";
    resBTrtans.innerHTML = sideA.value;
    resBMeters.innerHTML = "см";
    resBTrtanslteded.innerHTML = sideA.value / 100;
    resBMetersTrtanslteded.innerHTML = "м";

    metersBTranlated = sideB.value / 100;
    resultB.innerHTML = metersBTranlated;
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = resultPiSec.textContent * equal.textContent;
  }
  if (sideBmeters.value == "mm") {
    blockTranslate.style.display = "block";
    resBTrtans.innerHTML = sideB.value;
    resBMeters.innerHTML = "мм";
    resBTrtanslteded.innerHTML = sideB.value / 1000;
    resBMetersTrtanslteded.innerHTML = "м";

    metersBTranlated = sideB.value / 1000;
    resultB.innerHTML = metersBTranlated;
    equal.innerHTML = resultA.textContent * resultB.textContent;
    res.innerHTML = resultPiSec.textContent * equal.textContent;
  }
  console.log("sideBmeters trans = " + metersBTranlated);
};

let pi = document.getElementById("pi");
let resultPi = document.getElementById("resultPi");
let resultPiSec = document.getElementById("resultPiSec");
resultPi.innerHTML = pi.value;
resultPiSec.innerHTML = pi.value;
pi.onchange = function () {
  console.log("pi = " + pi.value);
  resultPi.innerHTML = pi.value;
  resultPiSec.innerHTML = pi.value;
  res.innerHTML = resultPiSec.textContent * equal.textContent;
};

let square = document.getElementById("square");
let metersOfLengthSquare = document.getElementById("metersOfLengthSquare");
let metersOfLengthSquareSec = document.getElementById(
  "metersOfLengthSquareSec"
);
metersOfLengthSquare.innerHTML = "м²";
metersOfLengthSquareSec.innerHTML = "м²";
square.onchange = function () {
  if (square.value == "m²") {
    metersOfLengthSquare.innerHTML = "м²";
    metersOfLengthSquareSec.innerHTML = "м²";
  }
  if (square.value == "cm²") {
    metersOfLengthSquare.innerHTML = "см²";
    metersOfLengthSquareSec.innerHTML = "см²";

    blockTranslate.style.display = "block";
    resATrtans.innerHTML = sideA.value;
    resAMeters.innerHTML = "м";
    resATrtanslteded.innerHTML = sideA.value * 100;
    resAMetersTrtanslteded.innerHTML = "см";

    resBTrtans.innerHTML = sideB.value;
    resBMeters.innerHTML = "м";
    resBTrtanslteded.innerHTML = sideB.value * 100;
    resBMetersTrtanslteded.innerHTML = "см";
  }
  if (square.value == "mm²") {
    metersOfLengthSquare.innerHTML = "мм²";
    metersOfLengthSquareSec.innerHTML = "мм²";

    blockTranslate.style.display = "block";
    resATrtans.innerHTML = sideA.value;
    resAMeters.innerHTML = "м";
    resATrtanslteded.innerHTML = sideA.value * 1000;
    resAMetersTrtanslteded.innerHTML = "мм";

    resBTrtans.innerHTML = sideB.value;
    resBMeters.innerHTML = "м";
    resBTrtanslteded.innerHTML = sideB.value * 1000;
    resBMetersTrtanslteded.innerHTML = "мм";
  }
};

// result
let equal = document.getElementById("equal");
let res = document.getElementById("res");
equal.innerHTML = resultA.textContent * resultB.textContent;
res.innerHTML = resultPiSec.textContent * equal.textContent;

console.log("res - " + res.length);

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
