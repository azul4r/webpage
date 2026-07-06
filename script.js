const form = document.querySelector(".login-form");

const username = document.getElementById("username");
const password = document.getElementById("password");

const button = form.querySelector("button");


// =========================
// Utility
// =========================

function setError(input, message) {

    const group = input.parentElement;
    const error = group.querySelector(".error-message");

    input.classList.remove("input-success");
    input.classList.add("input-error");

    error.textContent = message;

}

function setSuccess(input) {

    const group = input.parentElement;
    const error = group.querySelector(".error-message");

    input.classList.remove("input-error");
    input.classList.add("input-success");

    error.textContent = "";

}

function clearState(input){

    input.classList.remove("input-error");
    input.classList.remove("input-success");

    const error = input.parentElement.querySelector(".error-message");
    error.textContent = "";

}


// =========================
// Live Validation
// =========================

username.addEventListener("input", () => {

    if(username.value.trim() === ""){

        clearState(username);
        return;

    }

    setSuccess(username);

});


password.addEventListener("input", () => {

    if(password.value.length === 0){

        clearState(password);
        return;

    }

    if(password.value.length < 8){

        setError(password, "Password minimal 8 karakter.");
        return;

    }

    setSuccess(password);

});


// =========================
// Submit
// =========================

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let valid = true;


    // Username

    if(username.value.trim() === ""){

        setError(username, "Username wajib diisi.");
        valid = false;

    }else{

        setSuccess(username);

    }


    // Password

    if(password.value.trim() === ""){

        setError(password, "Password wajib diisi.");
        valid = false;

    }
    else if(password.value.length < 8){

        setError(password, "Password minimal 8 karakter.");
        valid = false;

    }
    else{

        setSuccess(password);

    }


    if(!valid){
        return;
    }


    // Loading

    button.disabled = true;

    const oldText = button.textContent;

    button.textContent = "Loading...";


    // Simulasi request ke server

    setTimeout(() => {

        button.disabled = false;
        button.textContent = oldText;

        alert("Siap dikirim ke backend 🚀");

    }, 2000);

});