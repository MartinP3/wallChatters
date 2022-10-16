// Loads the profile in
import { load } from "../storage/index.mjs";
import * as templates from "../templates/index.mjs";

// Adds profile content
export async function addProfile({profile} = {}) {
  const userProfile = load("profile");

  if (userProfile.name) {
      const container = document.querySelector("#profile");
      templates.renderProfileTemplate(userProfile, container);
  }
}