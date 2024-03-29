const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

export function validateForm(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const formErrorMsg = document.getElementsByClassName("error-form");
    const status = document.getElementById("status");


    const emailRegExp =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailTestResult = emailRegExp.test(email.value);


    function validator(selector, add, remove, msg, place, icon) {
        selector.classList.add(add);
        selector.classList.remove(remove);
        place.innerHTML = msg;
        selector.nextElementSibling.innerHTML = icon;
    }
    let errorDetector = false;

    if (name.value.trim() === "") {
        errorDetector = true;
        validator(
            name,
            "invalid",
            "valid",
            "<h4>Please enter your name</h4>",
            formErrorMsg[0],
            "<i class='bi bi-x'></i>"
        );
    } else if (name.value.length < 3) {
        errorDetector = true;
        validator(
            name,
            "invalid",
            "valid",
            "<h4>Please enter your name, min 3 characters.</h4>",
            formErrorMsg[0],
            "<i class='bi bi-x'></i>"
        );
    } else {
        validator(
            name,
            "valid",
            "invalid",
            "",
            formErrorMsg[0],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (email.value.trim() === "") {
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
            "<h4>Please enter valid email adress.</h4>",
            formErrorMsg[1],
            "<i class='bi bi-x'></i>"
        );
    } else {
        validator(
            email,
            "valid",
            "invalid",
            "",
            formErrorMsg[1],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (subject.value.trim() === "") {
        errorDetector = true;
        validator(
            subject,
            "invalid",
            "valid",
            "<h4>Please enter subject of your message.</h4>",
            formErrorMsg[2],
            "<i class='bi bi-x'></i>"
        );
    } else if (subject.value.length < 5) {
        errorDetector = true;
        validator(
            subject,
            "invalid",
            "valid",
            "<h4>Please enter subject, min 5 characters.</h4>",
            formErrorMsg[2],
            "<i class='bi bi-x'></i>"
        );
    } else {
        validator(
            subject,
            "valid",
            "invalid",
            "",
            formErrorMsg[2],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (message.value.trim() === "") {
        errorDetector = true;
        validator(
            message,
            "invalid",
            "valid",
            "<h4>Please write your message.</h4>",
            formErrorMsg[3],
            "<i class='bi bi-x'></i>"
        );
    } else if (message.value.length < 25) {
        errorDetector = true;
        validator(
            message,
            "invalid",
            "valid",
            "<h4>Please write your message, min 25 characters.</h4>",
            formErrorMsg[3],
            "<i class='bi bi-x'></i>"
        );
    } else {
        validator(
            message,
            "valid",
            "invalid",
            "",
            formErrorMsg[3],
            "<i class='bi bi-check-lg'></i>"
        );
    }

    if (errorDetector) {
        status.innerHTML = "Please fill out the form correctly!";
    } else {
        status.innerHTML = "Email Sent Successfully";
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}
