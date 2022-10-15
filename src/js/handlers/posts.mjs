import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";

// Adds the 100 latest posts to /posts
export async function addPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#multiplePosts");
    templates.renderPostTemplates(posts, container);
}

// Builds a single post on it's respective page
export async function addPost() {
    const post = await postMethods.getPost();
    const container = document.querySelector("#singlePost");
    templates.renderPostTemplate(post, container);
}