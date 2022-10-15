import { login } from "../api/auth/login.mjs";

<<<<<<< HEAD
export function setLoginFormListener()  {
<<<<<<< Updated upstream
=======
    // Clears local storage so you're "logged out"
    localStorage.clear();

>>>>>>> Stashed changes
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
    
            // Send to API
            login(profile);
        })
    }
}
=======
export function setLoginFormListener() {
  // Clears local storage so you're "logged out"
  localStorage.clear();

  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send to API
      login(profile);
    });
  }
}
>>>>>>> js2-logout
