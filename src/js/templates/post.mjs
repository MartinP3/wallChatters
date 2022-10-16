// Single Post
export function postTemplateA(postData) {

  // Checks the local time on the API then makes it more legible on the user end
  const formattedDate = new Date(postData.updated).toLocaleDateString('en-us', {month:"short", day:"numeric"});
  const formattedTime = new Date(postData.updated).toLocaleTimeString('en-GB');

  const post = document.createElement("div");
  post.classList.add("post", "card", "mb-3", "text-bg-dark");

  // Checks if media is attached, if not, skip
  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = postData.media;
    img.alt = `Picture related to ${postData.title}`;
    post.append(img);
  }

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  post.append(cardBody);

  // Post title
  const cardBodyTitle = document.createElement("h5");
  cardBodyTitle.classList.add("card-title");
  cardBodyTitle.innerText = postData.title;
  cardBody.append(cardBodyTitle);

  // Body text of the post
  const cardBodyText = document.createElement("p");
  cardBodyText.classList.add("card-text");
  cardBodyText.innerHTML = `${postData.body}`;
  cardBody.append(cardBodyText);

  const cardBodyLastUpdated = document.createElement("p");
  cardBodyLastUpdated.classList.add("card-text");
  cardBody.append(cardBodyLastUpdated);

  // Last update of the post
  const cardBodySmallText = document.createElement("small");
  cardBodySmallText.classList.add("text-muted");
  cardBodySmallText.innerText = `Last updated: ${formattedDate} ${formattedTime}`;
  cardBodyLastUpdated.append(cardBodySmallText);

  // Checks if tags are attached, if not, skip
  if (!postData.tags === "") {
    const cardBodyTags = document.createElement("div");
    cardBodyTags.classList.add("card-text", "mb-1");
    cardBodyTags.innerHTML = `Tags: ${postData.tags}`;
    cardBody.append(cardBodyTags);
  }

  // Adds the author name to the post
  const cardBodyAuthor = document.createElement("p");
  cardBodyAuthor.classList.add("card-text");
  cardBodyAuthor.innerHTML = `By: ${postData.author.name}`;
  cardBody.append(cardBodyAuthor);

  // Adds a clickable anchor to edit the post
  const cardBodyEdit = document.createElement("div");
  cardBodyEdit.classList.add("card-text");
  cardBodyEdit.innerHTML = `<a href="/post/edit/?id=${postData.id}" class="btn btn-primary btn-large mb-2">Edit post</a>`;
  cardBody.append(cardBodyEdit);

  // Adds a clickable anchor to delete the post (as long as you're the author)
  const cardBodyDelete = document.createElement("div");
  cardBodyDelete.classList.add("card-text");
  cardBodyDelete.innerHTML = `<a href="/post/remove/?id=${postData.id}" class="btn btn-danger btn-large">Delete post</a>`;
  cardBody.append(cardBodyDelete);
  return post;
}
/////////////////

/////////////////

// Multiple Posts
export function postTemplateB(postData) {

   // Checks the local time on the API then makes it more legible on the user end
   const formattedDate = new Date(postData.updated).toLocaleDateString('en-us', {month:"short", day:"numeric"});
   const formattedTime = new Date(postData.updated).toLocaleTimeString('en-GB');
 
  const post = document.createElement("div");
  post.classList.add("post", "card", "mb-3", "text-bg-dark");

  // Checks for image on post
  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = postData.media;
    img.alt = `Picture related to ${postData.title}`;
    post.append(img);
  }

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  post.append(cardBody);

  // Adds post title
  const cardBodyTitle = document.createElement("h5");
  cardBodyTitle.classList.add("card-title");
  cardBodyTitle.innerText = postData.title;
  cardBody.append(cardBodyTitle);

  // Adds body text
  const cardBodyText = document.createElement("p");
  cardBodyText.classList.add("card-text");
  cardBodyText.innerHTML = `${postData.body}`;
  cardBody.append(cardBodyText);

  // Clickable anchor to get to the single post's page
  const cardBodyViewPost = document.createElement("p");
  cardBodyViewPost.classList.add("card-text");
  cardBodyViewPost.innerHTML = `<a href="/post/?id=${postData.id}" target="_blank">View post #${postData.id}</a>`;
  cardBody.append(cardBodyViewPost);

  // Lists the author
  const cardBodyAuthor = document.createElement("p");
  cardBodyAuthor.classList.add("card-text");
  cardBodyAuthor.innerHTML = `By: ${postData.author.name}`;
  cardBody.append(cardBodyAuthor);

  // Paragraph for the next part 
  const cardBodyLastUpdated = document.createElement("p");
  cardBodyLastUpdated.classList.add("card-text");
  cardBody.append(cardBodyLastUpdated);

  // Adds last updated text with a <small> modifier
  const cardBodySmallText = document.createElement("small");
  cardBodySmallText.classList.add("text-muted");
  cardBodySmallText.innerText = `Last updated: ${formattedDate} ${formattedTime}`;
  cardBodyLastUpdated.append(cardBodySmallText);
  return post;
}

// Renders single post
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateA(postData));
}

// Renders multiple posts
export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}
