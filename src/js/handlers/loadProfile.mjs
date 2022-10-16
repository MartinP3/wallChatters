// Loads the profile in
import * as templates from "../templates/index.mjs";

// Adds profile content
export async function addProfile({profile} = {}) {
  if (profile.name) {
      const container = document.querySelector("#profile");
      templates.renderProfileTemplate(profile, container);
  }
}