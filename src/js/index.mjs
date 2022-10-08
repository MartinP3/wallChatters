import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/register/") {
    setRegisterFormListener();
} else if (path === "/profile/login/") {
    setLoginFormListener();
}

// post.createPost();
post.getPost(3560).then(console.log);
// post.getPosts().then(console.log);
// post.updatePost();
// post.removePost();
