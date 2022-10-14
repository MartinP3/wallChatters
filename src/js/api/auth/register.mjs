import { API_SOCIAL_URL } from "../constants.js";

const action = "/auth/register";
const method = "post";

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
  console.log(result);
  if (result.error) {
    alert("This account already exists");
  } else {
    alert("You are now registered");
  }

  return result;
}
