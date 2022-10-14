// Loads profile
export function profileTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("profile", "card", "mb-3", "text-bg-dark");
    
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("card-img-top")
        img.src = postData.media;
        img.alt = `Picture related to ${postData.title}`;
        post.append(img);
    }

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    post.append(cardBody);
    return post;
}

export function renderProfileTemplate(postData, parent) {
    parent.append(profileTemplate(postData))
}