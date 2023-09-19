document.addEventListener("DOMContentLoaded", function () {
  let rideDistanceInput = document.getElementById("rideDistance");
  let minTrafficInput = document.getElementById("minTraffic");
  let rideResult = document.getElementById("rideResult");

  let btnCalculate = document.getElementById("btnCalculate");
  let btnReset = document.getElementById("btnReset");

  btnCalculate.addEventListener("click", function () {
      let rideDistance = parseFloat(rideDistanceInput.value);
      let minTraffic = parseInt(minTrafficInput.value);

      let baseFare = 35.0;
      let perKilometerRate = 0.0;

      if (rideDistance <= 1) {
          perKilometerRate = 0.0;
      } else if (rideDistance <= 10) {
          perKilometerRate = 5.5;
      } else if (rideDistance <= 20) {
          perKilometerRate = 6.5;
      } else if (rideDistance <= 40) {
          perKilometerRate = 7.5;
      } else if (rideDistance <= 60) {
          perKilometerRate = 8.0;
      } else if (rideDistance <= 80) {
          perKilometerRate = 9.0;
      } else {
          perKilometerRate = 10.5;
      }

      let distanceCharge = (rideDistance - 1) * perKilometerRate + baseFare;
      let timeCharge = minTraffic * 2; // 2 baht per minute

      let totalCharge = distanceCharge + timeCharge;

      rideResult.innerHTML = totalCharge.toFixed(2);
  });

  btnReset.addEventListener("click", function () {
      rideDistanceInput.value = "";
      minTrafficInput.value = "";
      rideResult.innerHTML = "0.00";
  });
});