import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
// Method to interact with API and delete posts
const method = "delete";

// Function for deleting posts 
export async function removePost(id) {
  if (!id) {
    throw new Error("Deleting a post requires a postID");
  }

  const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(removePostURL, {
    method,
  });

  return await response.json();
}
