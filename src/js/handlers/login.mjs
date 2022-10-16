import { login } from "../api/auth/login.mjs";

export function setLoginFormListener()  {
    // Clears local storage so you're "logged out"
    localStorage.clear();

    const form = document.querySelector("#loginForm");
    // if there is a form and a submit happens in it, >login
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            console.log(profile);
    
            // Send to API
            login(profile);
        })
    }
}