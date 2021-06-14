function checkCreds() {
    console.log("checkCreds() started");
    //establishes the variables used for checking the login credentials
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNumb = document.getElementById("badgeID").value;

    //Validation of full name and badge number. If successful, will be redirected to the UAT Space page.
    //Full name must be longer than 2 characters but not more that 20.
    //Badge number cannot exceed 999 and must be greater than 1.
    //If requirements are not met, user will not be granted access to the UAT Space page.
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid input, name does not meet character limit."
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid input, badge does not meet character limit."
    } else {
        console.log("submission passes!");
        alert("Access Granted! Welcome to the UAT Space page " + fullName);
        location.replace("UATSpace.html");
    }
}