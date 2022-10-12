import router from "./router.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

router();

// Adds the 100 latest posts to /posts
if (location.pathname === "/posts/") {
    async function addPosts() {
        const posts = await postMethods.getPosts();
        const container = document.querySelector("#multiplePosts");
        templates.renderPostTemplates(posts, container);
    }
    addPosts();
}

// Builds a single post on it's respective page
if (location.pathname === "/post/") {
    async function addPost() {
        const post = await postMethods.getPost();
        const container = document.querySelector("#singlePost");
        templates.renderPostTemplate(post, container);
    }
    addPost();
}