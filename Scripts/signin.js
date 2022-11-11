import { navbar, footer } from "./top_components.js";
let nav_div = document.getElementById('navbar');
nav_div.innerHTML = navbar();

let go_to_register = document.getElementById("go_to_register");

go_to_register.addEventListener("click", () => {
    window.location.href = "./register.html"
})

let lsdata = JSON.parse(localStorage.getItem("personal_data"));

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    if (lsdata.email == email) {
        if (lsdata.password == password) {
            alert("Sign in Succesfull")
            window.location.href = "./index.html"
        } else if (lsdata.password == null) {
            alert("Plese Enter Password")
        } else {
            alert("Please Enter Correct Password")
        }
    } else {
        alert("Invalid Details")
    }
})