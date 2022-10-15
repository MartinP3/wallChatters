import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
<<<<<<< HEAD
    if (!profileData.name) {
        throw new Error("An edit/update requires a name");
    }

    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

    const response = await authFetch(updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    return await response.json();
}
=======
  if (!profileData.name) {
    throw new Error("An edit/update requires a name");
  }

  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });
  return await response.json();
}
>>>>>>> js2-logout
