const form = document.querySelector("form");
const pass = document.querySelector("#password");
const confPass = document.querySelector("#confirm-password");
const errorMsg = document.querySelector(".pass-error");
form.addEventListener("submit", (e) => {
    if (pass.value !== confPass.value) {
        e.preventDefault();
        errorMsg.textContent = "Password Unmatched !";
    }
});
