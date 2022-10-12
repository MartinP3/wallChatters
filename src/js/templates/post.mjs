// Single Post
export function postTemplateA(postData) {
    const post = document.createElement("div");
    post.classList.add("post", "card", "mb-3", "text-bg-dark");
    
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

    const cardBodyTitle = document.createElement("h5");
    cardBodyTitle.classList.add("card-title");
    cardBodyTitle.innerText = postData.title;
    cardBody.append(cardBodyTitle);

    const cardBodyText = document.createElement("p");
    cardBodyText.classList.add("card-text");
    cardBodyText.innerHTML = `${postData.body}`;
    cardBody.append(cardBodyText);

    const cardBodyLastUpdated = document.createElement("p");
    cardBodyLastUpdated.classList.add("card-text");
    cardBody.append(cardBodyLastUpdated);

    const cardBodySmallText = document.createElement("small");
    cardBodySmallText.classList.add("text-muted");
    cardBodySmallText.innerText = `Last updated: ${postData.updated}`;
    cardBodyLastUpdated.append(cardBodySmallText);

    const cardBodyTags = document.createElement("div");
    cardBodyTags.classList.add("card-text", "mb-1");
    cardBodyTags.innerHTML = `Tags: ${postData.tags}`;
    cardBody.append(cardBodyTags);

    const cardBodyAuthor = document.createElement("p");
    cardBodyAuthor.classList.add("card-text");
    cardBodyAuthor.innerHTML = `By: ${postData.author}`;
    cardBody.append(cardBodyAuthor);

    const cardBodyEdit = document.createElement("div");
    cardBodyEdit.classList.add("card-text");
    cardBodyEdit.innerHTML = `<a href="/post/edit/?id=${postData.id}">Edit post</a> Don't click if you're not the author >:(`
    cardBody.append(cardBodyEdit);
    return post;
}
/////////////////

// Multiple Posts
export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post", "card", "mb-3", "text-bg-dark");
    
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

    const cardBodyTitle = document.createElement("h5");
    cardBodyTitle.classList.add("card-title");
    cardBodyTitle.innerText = postData.title;
    cardBody.append(cardBodyTitle);

    const cardBodyText = document.createElement("p");
    cardBodyText.classList.add("card-text");
    cardBodyText.innerHTML = `${postData.body}`;
    cardBody.append(cardBodyText);

    const cardBodyViewPost = document.createElement("p");
    cardBodyViewPost.classList.add("card-text");
    cardBodyViewPost.innerHTML = `<a href="/post/?id=${postData.id}">View post #${postData.id}</a>`
    cardBody.append(cardBodyViewPost);

    const cardBodyLastUpdated = document.createElement("p");
    cardBodyLastUpdated.classList.add("card-text");
    cardBody.append(cardBodyLastUpdated);

    const cardBodySmallText = document.createElement("small");
    cardBodySmallText.classList.add("text-muted");
    cardBodySmallText.innerText = `Last updated: ${postData.updated}`;
    cardBodyLastUpdated.append(cardBodySmallText);
    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplateA(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplateB));
}