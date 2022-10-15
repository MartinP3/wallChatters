// Template for profile
export function profileTemplate(postData) {
  const profile = document.createElement("div");
  profile.classList.add("profile", "card", "mb-3", "text-bg-dark");

  // Checks for banner, if none then skipped
  if (postData.banner) {
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = postData.banner;
    img.alt = `Banner picture`;
    profile.append(img);
  }

  const profileBody = document.createElement("div");
  profileBody.classList.add("card-body", "row", "g-0");
  profile.append(profileBody);

  // Checks for avatar, if none then skipped
  // col-md-4 makes the image rather small until md screen size is reached
  if (postData.avatar) {
    const profileAvatar = document.createElement("img");
    profileAvatar.classList.add("img-fluid", "rounded-start", "col-md-4");
    profileAvatar.src = postData.avatar;
    profileAvatar.alt = `Avatar picture`;
    profileBody.append(profileAvatar);
  }

  //Creates a div that should take over the rest of the space with col-md-8
  const profileText = document.createElement("div");
  profileText.classList.add("col-md-8", "px-5", "py-3");
  profileBody.append(profileText);

  const profileName = document.createElement("h5");
  profileName.classList.add("card-title");
  profileName.innerHTML = `${postData.name}`;
  profileText.append(profileName);

  const profileEdit = document.createElement("div");
  profileEdit.classList.add("card-text");
  profileEdit.innerHTML = `<a href="/profile/edit">Edit profile</a>`;
  profileText.append(profileEdit);
  return profile;
}

export function renderProfileTemplate(postData, parent) {
  parent.append(profileTemplate(postData));
}
