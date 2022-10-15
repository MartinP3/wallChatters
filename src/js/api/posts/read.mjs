import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const author = "?_author=true";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}/${author}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

export async function getPost(thisID) {
  const url = new URL(location.href);
  thisID = url.searchParams.get("id");
  if (!thisID) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${thisID}${author}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
