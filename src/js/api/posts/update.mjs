import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Ayo bro we need a  postID to get some work done here!");
    }

    const updatePostsURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostsURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}