import { load } from "../storage/index.mjs";

export function headers() {
<<<<<<< HEAD
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
}
=======
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
>>>>>>> js2-logout
