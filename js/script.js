// Global variables
const otherJobRole = document.getElementById("other-job-role");
const jobRoleSelects = document.getElementById("title");
const colorSelects = document.getElementById("color");
const designSelects = document.getElementById("design");

// When website page loads
window.onload = () => {

    // Get the first input element and set the focus method to prompt user to start input here
    const getFirstInput = document.getElementById("name");
    getFirstInput.focus();

    // Hide the other job role field
    otherJobRole.style.display = "none";

    // Disable the color dropdown
    colorSelects.disabled = true;
}

// function to change show text field when user selects other job role
function displayOtherJobRole() {
  if (jobRoleSelects.value === "other") {
      otherJobRole.style.display = "block";
  } else {
      otherJobRole.style.display = "none";
  }
}
// function to loop through colorSelects and set display values for js puns colors
function displayJsPunsColors() {
  // only display the js puns colors from the colorSelects
  colorSelects.disabled = false;
  for ( var i = 0; i < colorSelects.length; i++) {
    if (colorSelects[i].value === "dimgrey") {
      colorSelects[i].style.display = "none";
    }
    if (colorSelects[i].value === "steelblue") {
      colorSelects[i].style.display = "none";
    }
    if (colorSelects[i].value === "tomato") {
      colorSelects[i].style.display = "none";
    }
    if (colorSelects[i].value === "cornflowerblue") {
      colorSelects[i].style.display = "block";
    }
    if (colorSelects[i].value === "darkslategrey") {
      colorSelects[i].style.display = "block";
    }
    if (colorSelects[i].value === "gold") {
      colorSelects[i].style.display = "block";
    }
  }
}
// function to loop through colorSelects and set display values for heart js colors
function displayHeartJsColors() {
  colorSelects.disabled = false;
  for ( var i = 0; i < colorSelects.length; i++) {
    if (colorSelects[i].value === "dimgrey") {
      colorSelects[i].style.display = "block";
    }
    if (colorSelects[i].value === "steelblue") {
      colorSelects[i].style.display = "block";
    }
    if (colorSelects[i].value === "tomato") {
      colorSelects[i].style.display = "block";
    }
    if (colorSelects[i].value === "cornflowerblue") {
      colorSelects[i].style.display = "none";
    }
    if (colorSelects[i].value === "darkslategrey") {
      colorSelects[i].style.display = "none";
    }
    if (colorSelects[i].value === "gold") {
      colorSelects[i].style.display = "none";
    }
  }
}

// display text field based on selection
jobRoleSelects.onchange = () => { displayOtherJobRole() }

// detect change on the designSelects
designSelects.onchange = () => {
  // set colors options based on the designSelects option
  if (designSelects.value === "js puns") {
    displayJsPunsColors()
  } else if (designSelects.value === "heart js") {
    displayHeartJsColors()
  }
}
