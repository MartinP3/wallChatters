import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function getProfiles() {
<<<<<<< HEAD
    const getProfileURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(getProfileURL)
    return await response.json();
}

export async function getProfile(name) {
    if (!name) {
        throw new Error("Get requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

    return await response.json();
}
=======
  const getProfileURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfileURL);
  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
>>>>>>> js2-logout
