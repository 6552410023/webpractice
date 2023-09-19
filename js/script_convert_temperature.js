document.addEventListener("DOMContentLoaded", function () {
  let tempInput = document.getElementById("tempInput");
  let btnConvert = document.getElementById("btnConvert");
  let btnReset = document.getElementById("btnReset");
  let ctfRadio = document.getElementById("ctfRadio");
  let ftcRadio = document.getElementById("ftcRadio");

  let tempResult = document.getElementById("tempResult");
  ctfRadio.checked = true;

  btnConvert.addEventListener("click", function () {
      let temperature = parseFloat(tempInput.value);
      let result = 0.0;

      if (ctfRadio.checked) {
          result = (temperature * 9) / 5 + 32;
          tempResult.innerHTML = result.toFixed(2) + "ฟาเรนไฮท์";
      } else if (ftcRadio.checked) {
          result = ((temperature - 32) * 5) / 9;
          tempResult.innerHTML = result.toFixed(2) + "เซลเซียส";
      }
  });

  btnReset.addEventListener("click", function () {
      tempInput.value = "";
      tempResult.innerHTML = "0.00";
      ctfRadio.checked = true;
  });
});


