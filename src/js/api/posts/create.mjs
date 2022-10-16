import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

// Function for creating posts
export async function createPost(postData) {
  const createPostsURL = API_SOCIAL_URL + action;

  // Checks for media, if none uploaded, delete it since it's "required"
  if (postData.media === "") {
    delete postData.media;
  }

  const response = await authFetch(createPostsURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
