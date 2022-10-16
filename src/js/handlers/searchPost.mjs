import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

// Search posts function

const action = "/posts";

const url = `${API_SOCIAL_URL}${action}`;

const response = await authFetch(url);
const postsJSON = await response.json();

if (location.pathname === "/posts/") {
  const searchPosts = document.getElementById("searchPosts");

  searchPosts.addEventListener("keyup", handleSearchPostsInput);
}

export async function handleSearchPostsInput(event) {
  try {
    const container = document.querySelector("#multiplePosts");
    container.innerHTML = "";

    // Lowers your capitalisation to reduce error when searching
    const inputValue = event.currentTarget.value.toLowerCase();

    const result = postsJSON.filter((searchResult) => {
      if (
        // Checks both body and title for input similarities in starting words
        searchResult.title.toLowerCase().startsWith(inputValue) ||
        searchResult.body.toLowerCase().startsWith(inputValue)
      ) {
        return true;
      }
    });
    // Renders the searched content on screen
    renderPostTemplates(result, container);
  } catch (error) {
    console.log(error);
  }
}
