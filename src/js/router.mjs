import * as listeners from "./handlers/index.mjs";
<<<<<<< Updated upstream

export default function router() {
    const path = location.pathname;
=======
import { load } from "./storage/index.mjs";

export default function router() {
    const path = location.pathname;
    const profile = load("profile");
>>>>>>> Stashed changes

    switch (path) {
        case "/profile/register/":
            listeners.setRegisterFormListener()
            break;
        case "/profile/login/":
            listeners.setLoginFormListener()
            break;
        case "/profile/edit/":
            listeners.setUpdateProfileListener()
            break;
        case "/profile/":
<<<<<<< Updated upstream
            listeners.addProfile()
            break;
        case "/posts/":
            listeners.addPosts();
=======
            listeners.addProfile({ profile })
            break;
        case "/posts/":
            listeners.addPosts()
>>>>>>> Stashed changes
            break;
        case "/post/create/":
            listeners.setCreatePostListener()
            break;
        case "/post/edit/":
            listeners.setUpdatePostListener()
            break;
        case "/post/remove/":
<<<<<<< Updated upstream
            listeners.setDeletePostListener()
            break;
        case "/post/":
            listeners.addPost();
=======
            listeners.setDeletePostListener
            break;
        case "/post/":
            listeners.addPost()
>>>>>>> Stashed changes
            break;
    }   
}