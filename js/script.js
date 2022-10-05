const otherJobRole = document.getElementById("other-job-role");

// When website page loads

window.onload = () => {
    // Get the first input element and set the focus method to prompt user to start input here
    const getFirstInput = document.getElementById("name");
    getFirstInput.focus();

    // Hide the other job role field
    otherJobRole.style.display = "none";

}

// function to change show text field when user selects other job role
function displayOtherJobRole() {
    
}

// display text field based on selection
const jobRoleSelects = document.getElementById("title");
jobRoleSelects.onchange = () => {
    console.log("Change logged")
if (jobRoleSelects.value === "other") {
    otherJobRole.style.display = "block";
} else {
    otherJobRole.style.display = "none";
}
}