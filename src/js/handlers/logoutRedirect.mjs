// Checks for a profile in local storage
const profile = localStorage.getItem("profile");
// If there is none, redirect to login
if (!profile) {
  location.href = "/profile/login";
}
