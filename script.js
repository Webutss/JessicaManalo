// script.js
function validateForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById('country').value;
    var highestQualification = document.getElementById('highest_qualification').value;
    var previousInstitution = document.getElementById('previous_institution').value;
    var yearOfGraduation = document.getElementById('year_of_graduation').value;
    var gradePercentage = document.getElementById('grade_percentage').value;
    var feeAmount = document.getElementById('fee_amount').value;
    var paymentMethod = document.getElementById('payment_method').value;
    var transactionId = document.getElementById('transaction_id').value;

    // Check if all required fields are filled
    if (firstName == "" || lastName == "" || dob == "" || !gender || country == "" || highestQualification == "" || previousInstitution == "" || yearOfGraduation == "" || gradePercentage == "" || feeAmount == "" || paymentMethod == "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // If the payment method is selected as 'Credit Card' or 'PayPal', the Transaction ID is not required.
    if (paymentMethod !== "bank_transfer" && transactionId !== "") {
        alert("Transaction ID is only required for Bank Transfer.");
        return false;
    }

    // Check if year of graduation is a valid number
    if (isNaN(yearOfGraduation) || yearOfGraduation <= 0) {
        alert("Please enter a valid year of graduation.");
        return false;
    }

    // Check if grade/percentage is not empty
    if (gradePercentage == "") {
        alert("Please enter your grade or percentage.");
        return false;
    }

    // Alert on successful form submission
    alert("Form submitted successfully!");
    return true;
}
