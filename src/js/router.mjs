// Imports the all the functions to trigger them depending on the url
import * as listeners from "./handlers/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/register/":
      listeners.setRegisterFormListener();
      break;
    case "/profile/login/":
      listeners.setLoginFormListener();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      break;
    case "/profile/":
      listeners.addProfile({ profile });
      break;
    case "/posts/":
      listeners.addPosts();
      break;
    case "/post/create/":
      listeners.setCreatePostListener();
      break;
    case "/post/edit/":
      listeners.setUpdatePostListener();
      break;
    case "/post/remove/":
      listeners.setDeletePostListener();
      break;
    case "/post/":
      listeners.addPost();
      break;
  }
}
