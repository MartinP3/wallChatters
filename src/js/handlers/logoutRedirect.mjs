<<<<<<< Updated upstream
// Redirects if not logged in
// export async function loginCheck() {
//     const name = localStorage.getItem("profile");
//     if (!name) {
//         location.href = "/profile/login";
//     }
// }
=======
// Checks for a profile in local storage
const profile = localStorage.getItem("profile");
if (!profile) {
  location.href = "/profile/login";
}
>>>>>>> Stashed changes
