// Global variables
const otherJobRole = document.getElementById("other-job-role");
const jobRoleSelects = document.getElementById("title");

const colorSelects = document.getElementById("color");
const designSelects = document.getElementById("design");

const activities = document.getElementById("activities-box");
const activitiesCost = document.getElementById("activities-cost");
let counter = 0;

const paymentSelects = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

let checkedArr = [];


// When website page loads
window.onload = () => {

    // Get the first input element and set the focus method to prompt user to start input here

    nameInput.focus();

    // Hide the other job role field
    otherJobRole.style.display = "none";

    // Disable the color dropdown
    colorSelects.disabled = true;

    // Set the creditCard as the default payment
    paypal.style.display = "none";
    bitcoin.style.display = "none";
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
// Show creditCard
function showCreditCardPayment() {
  creditCard.style.display = "block";
  paypal.style.display = "none";
  bitcoin.style.display = "none";
}
// Show PayPal
function showPayPalPayment() {
  creditCard.style.display = "none";
  paypal.style.display = "block";
  bitcoin.style.display = "none";
}
// Show bitcoin
function showBitcoinPayment() {
  creditCard.style.display = "none";
  paypal.style.display = "none";
  bitcoin.style.display = "block";
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

// Detect changes on the activties inputs
activities.onchange = (e) => {
  const clicked = e.target;
  const dataCost = clicked.getAttribute("data-cost");
  const parsedCost = parseInt(dataCost);
  if (clicked.checked) {
    counter += parsedCost
    activitiesCost.innerText = `Total: $${counter}`;
    checkedArr.push(clicked)
  } else if (clicked.checked === false) {
    counter -= parsedCost
    activitiesCost.innerText = `Total: $${counter}`;
    checkedArr.pop(clicked);
  }
}

// Detect change on the paymentSelects
paymentSelects.onchange = () => {
  if (paymentSelects.value === "credit-card") {
    showCreditCardPayment()
  }
  if (paymentSelects.value === "paypal") {
    showPayPalPayment()
  }
  if (paymentSelects.value === "bitcoin") {
    showBitcoinPayment()
  }
}

const button = document.querySelector('button');
button.addEventListener("click", function(e) {

// Check is name field is empty
  if (nameInput.value == 0) {
    e.preventDefault();
    alert("Add your name");
  }

// Check for correct email formatting
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value.match(mailformat)) {
    return true
  } else {
    e.preventDefault();
    alert("Invalid address");
  }

// Check if activities are unselected
  if (checkedArr.length === 0) {
    e.preventDefault();
    alert("Activity must be selected");
  }


});
