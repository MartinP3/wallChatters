import * as postMethods from "../api/profile/index.mjs";
import * as templates from "../templates/index.mjs";

import { load } from "../storage/index.mjs";

// Loads profile
export async function addProfile({ profile } = {}) {
  profile = a;
  if (profile) {
    const container = document.querySelector("#profile");
    templates.renderProfileTemplate(profile, container);
  }
}
