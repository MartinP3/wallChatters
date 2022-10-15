import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
<<<<<<< HEAD
    if (!postData.id) {
        throw new Error("An edit/update requires a PostID");
    }
    if (postData.media === "") {
        delete postData.media;
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}
=======
  if (!postData.id) {
    throw new Error("An edit/update requires a PostID");
  }
  if (postData.media === "") {
    delete postData.media;
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
>>>>>>> js2-logout
