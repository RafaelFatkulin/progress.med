const passwordInput = document.querySelector("#password");
const passwordLabel = document.querySelector(".password-label");

passwordLabel.addEventListener("click", () => {
    console.log("click");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordLabel.style.color = 'var(--lightblue)'
    } else {
        passwordInput.type = "password";
        passwordLabel.style.color = 'var(--blue)'
    }
});
