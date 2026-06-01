"use strict";
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const output = document.getElementById("output");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
        name: nameInput.value,
        email: emailInput.value,
    };
    displayUser(user);
});
function displayUser(user) {
    output.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
  `;
}
