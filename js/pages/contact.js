const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

export function validateForm(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let formErrorMsg = document.getElementsByClassName("error-form");
    let status = document.getElementById("status");
    let errorDetector = false;

    let emailRegExp =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailTestResult = emailRegExp.test(email.value);


    function validator(selector, add, remove, msg, place, icon) {
        selector.classList.add(add);
        selector.classList.remove(remove);
        place.innerHTML = msg;
        selector.nextElementSibling.innerHTML = icon;
    }

    if (name.value.trim() == "") {
        errorDetector = true;
        validator(
            name,
            "invalid",
            "valid",
            "<h3>Please enter your name</h3>",
            formErrorMsg[0],
            "<i class='bi bi-x'></i>"
        );
    } else if (name.value.length < 3) {
        errorDetector = true;
        validator(
            name,
            "invalid",
            "valid",
            "<h3>Please enter your name, min 3 characters.</h3>",
            formErrorMsg[0],
            "<i class='bi bi-x'></i>"
        );
    } else {
        errorDetector = false;
        validator(
            name,
            "valid",
            "invalid",
            "",
            formErrorMsg[0],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (email.value.trim() == "") {
        errorDetector = true;
        validator(
            email,
            "invalid",
            "valid",
            "<h3>Please enter email adress</h3>",
            formErrorMsg[1],
            "<i class='bi bi-x'></i>"
        );
    } else if (!emailTestResult) {
        errorDetector = true;
        validator(
            email,
            "invalid",
            "valid",
            "<h3>Please enter valid email adress.</h3>",
            formErrorMsg[1],
            "<i class='bi bi-x'></i>"
        );
    } else {
        errorDetector = false;
        validator(
            email,
            "valid",
            "invalid",
            "",
            formErrorMsg[1],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (subject.value.trim() == "") {
        errorDetector = true;
        validator(
            subject,
            "invalid",
            "valid",
            "<h3>Please enter subject of your message.</h3>",
            formErrorMsg[2],
            "<i class='bi bi-x'></i>"
        );
    } else if (subject.value.length < 5) {
        errorDetector = true;
        validator(
            subject,
            "invalid",
            "valid",
            "<h3>Please enter subject, min 5 characters.</h3>",
            formErrorMsg[2],
            "<i class='bi bi-x'></i>"
        );
    } else {
        errorDetector = false;
        validator(
            subject,
            "valid",
            "invalid",
            "",
            formErrorMsg[2],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (message.value.trim() == "") {
        errorDetector = true;
        message.classList.add("invalid");
        formErrorMsg[3].innerHTML = "Please write your message.";
    } else if (message.value.length < 10) {
        errorDetector = true;
        message.classList.add("invalid");
        formErrorMsg[3].innerHTML = "Please write your message, min 25 characters.";
    } else {
        errorDetector = false;
        message.classList.remove("invalid");
        message.classList.add("valid");
        formErrorMsg[3].innerHTML = "";
    }

    if (errorDetector) {
        status.innerHTML = "Please fill out the form correctly!";
    } else {
        status.innerHTML = "Email Sent Successfully";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}
