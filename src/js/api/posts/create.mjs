import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
<<<<<<< HEAD
    const createPostsURL = API_SOCIAL_URL + action;

    if (postData.media === "") {
        delete postData.media;
    }

    const response = await authFetch(createPostsURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}
=======
  const createPostsURL = API_SOCIAL_URL + action;

  if (postData.media === "") {
    delete postData.media;
  }

  const response = await authFetch(createPostsURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
>>>>>>> js2-logout
