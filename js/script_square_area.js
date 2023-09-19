
document.addEventListener("DOMContentLoaded", function () {
  let btnCalculate = document.getElementById("btnCalculate");
  let btnReset = document.getElementById("btnReset");
  let inputWidth = document.getElementById("inputWidth");
  let inputLength = document.getElementById("inputLength");
  let resultSquare = document.getElementById("resultSquare");

  btnCalculate.addEventListener("click", function () {
      let width = parseFloat(inputWidth.value);
      let length = parseFloat(inputLength.value);
      let squareArea = width * length;
      squareArea = squareArea.toFixed(2);

      resultSquare.innerHTML = squareArea;
  });

  btnReset.addEventListener("click", function () {
      inputWidth.value = "";
      inputLength.value = "";
      resultSquare.innerHTML = "0.00";
  });
});