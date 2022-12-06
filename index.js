addEventListener("click", (e) => console.log(e.target.tagName));

let inputText = document.getElementById("addText");

inputText.addEventListener("click", getText);

function getText() {
  var textFromInput = document.getElementById("input-text").value;
  alert(textFromInput);
}

let inputNumberArea1 = document.getElementById("cleanNumberArea1");

inputNumberArea1.addEventListener("click", cleanNumberArea1);

function cleanNumberArea1() {
  var getNumber = document.getElementById("numberArea1");
  getNumber.value = "";
}

let inputNumberArea2 = document.getElementById("NumberArea2");

let sumNumberAreas = document.getElementById("sumNumberButton");

sumNumberAreas.addEventListener("click", sumNumbers);

function sumNumbers() {
  var getNumber1 = parseInt(document.getElementById("numberArea1").value);
  var getNumber2 = parseInt(document.getElementById("numberArea2").value);
  // if (isNaN(getNumber1.value) == true) getNumber1 = 0;
  // if (isNaN(getNumber2.value) == true) getNumber2 = 0;
  var sumResult = getNumber1 + getNumber2;
  document.getElementById("numberArea2").value = sumResult;
}

// let lastInputItem =
//   document.documentElement.lastElementChild.lastElementChild
//     .previousElementSibling.lastElementChild;

// lastInputItem.style.cssText = "margin: 50px";

let inputButton1 = document.getElementById("addText");

let inputButton2 = document.getElementById("cleanNumberArea1");

let inputButton3 = document.getElementById("sumNumberButton");

function changeButtonNames() {
  inputButton1.value = "alert text";
  inputButton2.value = "delete numbers";
  inputButton3.value = "sum the numbers";
}

window.setTimeout(changeButtonNames, 2000);
