
function showTemperature(event) {
    event.preventDefault();
    let button = document.querySelector("button");
    button.innerHTML = "18 degrees";
  }
  
  let button = document.querySelector("button");
  button.addEventListener("click", showTemperature);
  