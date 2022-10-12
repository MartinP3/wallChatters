import * as listeners from "./handlers/index.mjs";

export default function router() {
    const path = location.pathname;

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
        case "/post/create/":
            listeners.setCreatePostListener()
            break;
        case "/post/edit/":
            listeners.setUpdatePostListener()
            break;
    }
}