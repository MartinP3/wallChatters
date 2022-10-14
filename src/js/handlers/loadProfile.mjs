import * as postMethods from "../api/profile/index.mjs";
import * as templates from "../templates/index.mjs";

// Loads profile
export async function addProfile() {
    const profile = await postMethods.getProfiles();
    const container = document.querySelector("#profile");
    templates.renderProfileTemplate(profile, container);
    console.log(profile);
}