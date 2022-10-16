import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
// the put method to modify the profile content
const method = "put";

export async function updateProfile(profileData) {
  // Checks for a profile name, throws error if none
  // since it's needed to load profile data properly from API.
  if (!profileData.name) {
    throw new Error("An edit/update requires a name");
  }

  // Location in API where profile info is located
  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });
  return await response.json();
}
