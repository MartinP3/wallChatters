<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> js2-logout
import * as postMethods from "../api/profile/index.mjs";
import * as templates from "../templates/index.mjs";

import { load } from "../storage/index.mjs";

<<<<<<< HEAD
const { name } = load("profile");

// Loads profile
export async function addProfile() {
    const profile = await postMethods.getProfile(name);
    const container = document.querySelector("#profile");
    templates.renderProfileTemplate(profile, container);
=======
// import * as postMethods from "../api/profile/index.mjs";
import * as templates from "../templates/index.mjs";

// import { load } from "../storage/index.mjs";

// Loads profile
export async function addProfile({ profile } = {}) {
    if (profile.name) {
        const container = document.querySelector("#profile");
        templates.renderProfileTemplate(profile, container);
    }
>>>>>>> Stashed changes
}
=======
// Loads profile
export async function addProfile({ profile } = {}) {
  profile = a;
  if (profile) {
    const container = document.querySelector("#profile");
    templates.renderProfileTemplate(profile, container);
  }
}
>>>>>>> js2-logout
