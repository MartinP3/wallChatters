import { register } from "../api/auth/register.mjs";

<<<<<<< HEAD
export function setRegisterFormListener()  {
<<<<<<< Updated upstream
=======
    // Clears your local storage when you go to register
    localStorage.clear();

>>>>>>> Stashed changes
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            
            if (profile.banner === "") {
                delete profile.banner;
            }
            if (profile.avatar === "") {
                delete profile.avatar;
            }
    
            // Send to API
            register(profile);
        })
    }
}
=======
export function setRegisterFormListener() {
  // Clears your local storage when you go to register
  localStorage.clear();

  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      if (profile.banner === "") {
        delete profile.banner;
      }
      if (profile.avatar === "") {
        delete profile.avatar;
      }

      // Send to API
      register(profile);
    });
  }
}
>>>>>>> js2-logout
