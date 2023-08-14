function updateTime() {
  // Des Moines
  let desMoinesElement = document.querySelector("#des-moines");
  if (desMoinesElement) {
    let desMoinesDateElement = desMoinesElement.querySelector(".date");
    let desMoinesTimeElement = desMoinesElement.querySelector(".time");
    let desMoinesTime = moment().tz("America/Chicago");

    desMoinesDateElement.innerHTML = desMoinesTime.format("MMMM Do YYYY");
    desMoinesTimeElement.innerHTML = desMoinesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Ontario
  let ontarioElement = document.querySelector("#ontario");
  if (ontarioElement) {
    let ontarioDateElement = ontarioElement.querySelector(".date");
    let ontarioTimeElement = ontarioElement.querySelector(".time");
    let ontarioTime = moment().tz("Canada/Eastern");

    ontarioDateElement.innerHTML = ontarioTime.format("MMMM Do YYYY");
    ontarioTimeElement.innerHTML = ontarioTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Lagos
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
