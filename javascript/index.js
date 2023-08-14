function updateTime() {
  // Des Moines
  let desMoinesElement = document.querySelector("#des-moines");
  let desMoinesDateElement = desMoinesElement.querySelector(".date");
  let desMoinesTimeElement = desMoinesElement.querySelector(".time");
  let desMoinesTime = moment().tz("America/Chicago");

  desMoinesDateElement.innerHTML = desMoinesTime.format("MMMM Do YYYY");
  desMoinesTimeElement.innerHTML = desMoinesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Ontario
  let ontarioElement = document.querySelector("#ontario");
  let ontarioDateElement = ontarioElement.querySelector(".date");
  let ontarioTimeElement = ontarioElement.querySelector(".time");
  let ontarioTime = moment().tz("Canada/Eastern");

  ontarioDateElement.innerHTML = ontarioTime.format("MMMM Do YYYY");
  ontarioTimeElement.innerHTML = ontarioTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Lagos
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosTime = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
