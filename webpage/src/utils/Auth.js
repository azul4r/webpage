export function login(username) {

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

}

export function logout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

}

export function isLoggedIn() {

    return localStorage.getItem("isLoggedIn") === "true";

}

export function getUsername() {

    return localStorage.getItem("username");

}