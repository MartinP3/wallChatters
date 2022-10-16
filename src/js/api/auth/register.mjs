import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

// Register function
export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  // If username or email is in use it won't register but will then assume you have an account
  // and then send you to the login page.
  if (result.error) {
    alert("This account already exists");
    location.href = "/profile/login";
  } else {
    // Registration is complete and you will be sent to the posts page.
    alert("You are now registered");
    location.href = "/posts";
  }

  return result;
}
