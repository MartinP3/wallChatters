import { API_SOCIAL_URL } from "../api/constants.js";
import { authFetch } from "../api/authFetch.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

// Search function
const action = "/posts"

const url = `${API_SOCIAL_URL}${action}`;

const response = await authFetch(url);
const postsJSON = await response.json();

if (location.pathname === "/posts/") {
    const searchPosts = document.getElementById("searchPosts");

    searchPosts.addEventListener('keyup', handleSearchPostsInput);
}

export async function handleSearchPostsInput(event) {
    try {
        const container = document.querySelector("#multiplePosts");
        container.innerHTML = "";

        const inputValue = event.currentTarget.value.toLowerCase();

        const result = postsJSON.filter((searchResult) => {
            if (searchResult.title.toLowerCase().startsWith(inputValue)
                || searchResult.body.toLowerCase().startsWith(inputValue)) {
                return true;
            }
        })
        
        renderPostTemplates(result, container);
    }
    catch (error) {
        console.log(error);
    }
}
