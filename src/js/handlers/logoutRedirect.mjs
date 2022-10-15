// Checks for a profile in local storage
const profile = localStorage.getItem("profile");
if (!profile) {
  location.href = "/profile/login";
}
