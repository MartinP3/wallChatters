// Filter posts in ascending and descending manners
import { API_POSTS_ASCENDING } from "../api/constants.js";
import { API_POSTS_DESCENDING } from "../api/constants.js";
import { authFetch } from "../api/authFetch.mjs";

// Buttons
const buttonAscPosts = document.querySelector("#ascendingPosts");
const buttonDescPosts = document.querySelector("#descendingPosts");

// New posts first
  async function getAscPosts() {
  const getAscPostsURL = `${API_POSTS_ASCENDING}`;

  const response = await authFetch(getAscPostsURL);

  return await response.json();
}

buttonAscPosts.addEventListener("click", filterAsc);
export function filterAsc() {
  getAscPosts();
  console.log("works");
}

// Old posts first
async function getDescPosts() {
  const getDescPostsURL = `${API_POSTS_DESCENDING}`;

  const response = await authFetch(getDescPostsURL);

  return await response.json();
}

buttonDescPosts.addEventListener("click", filterDesc);
export function filterDesc() {
  getDescPosts();
  console.log("works");
}