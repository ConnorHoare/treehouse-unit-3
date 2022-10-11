// Global variables
const otherJobRole = document.getElementById("other-job-role");
const jobRoleSelects = document.getElementById("title");

const colorSelects = document.getElementById("color");
const designSelects = document.getElementById("design");

const activities = document.getElementById('activities');
const activitiesBox = document.getElementById("activities-box");
const activitiesLabeles = activitiesBox.children;
const activitiesCost = document.getElementById("activities-cost");
const activitiesHint = document.getElementById('activities-hint');
let counter = 0;

const paymentSelects = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const creditCardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const creditCardRegex = /^([0-9]{13,16})$/;
const zipCodeRegEx = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const cvvRegEx = /^([0-9]{3})$/;

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
// Validate inputs
function validateInput(input, regex) {
  if (regex.test(input.value)) {
    input.closest('label').className = 'valid';
    input.nextElementSibling.style.display = "none";
    input.classList.remove('error');
  } else {
    input.closest('label').className = 'not-valid';
    input.nextElementSibling.style.display = "block";
    input.classList.add('error');
  }
}
// Name Validation
function validateName(input) {
  if (input.value.length == 0) {
    input.closest('label').className = 'not-valid';
    input.nextElementSibling.style.display = 'block';
    input.classList.add('error');
  } else {
    input.closest('label').className = 'valid';
    input.nextElementSibling.style.display = "none";
    input.classList.remove('error');
  }
}
// Add focus to the inputs
function addFocus(event, labelClass) {
  activities.addEventListener(event, e => {
    const input = e.target;
    const label = input.parentNode;
    label.className = labelClass;
  });
}
// Add error classes to activities
function addActivitiesErrors() {
  activitiesHint.style.display = "block";
  activities.classList.add("error");
  activities.classList.add("not-valid");
  activities.classList.remove("valid");
}
// Remove error classes to activities
function removeActivitiesErrors() {
  activitiesHint.style.display = "none";
  activities.classList.remove("error");
  activities.classList.remove("not-valid");
  activities.classList.add("valid");
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

// conflicting activities function
function findConflicts(selectedCheckbox, labels) {
    // get day and time of selected checkbox
    const selectedTime = selectedCheckbox.dataset.dayAndTime;
    // get name of checkbox
    const selectedName = selectedCheckbox.name;
    // create empty array 
    const confilcts = []
    // loop through all labels
    for (var i = 0; i < labels.length; i++) {
      // create variable for current label
      let label = labels[i];
      // get the checkbox from the label
      let checkbox = label.firstElementChild;
      // get the time and day from the current label
      let time = checkbox.dataset.dayAndTime;
      // get the name of the current label
      let name = checkbox.name;
      // check if the selected checkbox has and time match in the loop
      if (time === selectedTime && name !== selectedName) {
        // push the conflicting time checkbox to the array 
        confilcts.push(checkbox);
      }
    }
    // return the array
    return confilcts;
}

// disable the confilcting results
function disableConflicts(isConflicting, labelClass, selectedCheckbox, labels) {
  // find conflicts and store them in constant
  const conflictingCheckboxes = findConflicts(selectedCheckbox, labels);
  // loop through all the conflicting checkboxes
  for (var i = 0; i < conflictingCheckboxes.length; i++) {
    // get the current conflicitng checkbox
    let checkbox = conflictingCheckboxes[i];
    // get the label of the checkbox
    let label = checkbox.parentNode;
    // set the checkboxes disabled property to the parameter
    checkbox.disabled = isConflicting;
    // set the labels class to the parameter
    label.className = labelClass;
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
    disableConflicts(true, 'disabled', clicked, activitiesLabeles)
  } else if (clicked.checked === false) {
    counter -= parsedCost
    activitiesCost.innerText = `Total: $${counter}`;
    checkedArr.pop(clicked);
    disableConflicts(false, '', clicked, activitiesLabeles);
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

document.querySelector('form').addEventListener("submit", (e) => {
  validateInput(emailInput, mailFormat);
  validateInput(creditCardNumber, creditCardRegex);
  validateInput(zipCode, zipCodeRegEx);
  validateInput(cvv, cvvRegEx);
  validateName(nameInput);

  if (checkedArr.length === 0) {
   // If no values prevent submission and alert user
   addActivitiesErrors()
 } else {
   removeActivitiesErrors()
 }

  if(document.querySelectorAll(".not-valid").length > 0) {
    e.preventDefault();
  }
});

addFocus("focusin", "focus")
addFocus("focusout", "")
