import { getPost, removePost } from "../api/posts/index.mjs";

export async function setDeletePostListener()  {
    const form = document.querySelector("#deletePost");

    const url = new URL(location.href);
    const  id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

        const post = await getPost(id);
        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
						post.id = id;
    
            // Send to API
            removePost(id);
        })
    }
}