import * as postMethods from "../api/profile/index.mjs";
import * as templates from "../templates/index.mjs";

import { load } from "../storage/index.mjs";

const { name } = load("profile");

// Loads profile
export async function addProfile() {
    const profile = await postMethods.getProfile(name);
    const container = document.querySelector("#profile");
    templates.renderProfileTemplate(profile, container);
    console.log(profile);
}