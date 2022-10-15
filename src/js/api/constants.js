export const API_HOST_URL = "https://nf-api.onrender.com";
export const API_BASE = "/api/v1";
export const API_SOCIAL_BASE = "/social";
export const API_SOCIAL_URL = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}`;

// For filters
export const API_POSTS = "/posts";
export const API_AUTHOR = "?_author=true";
export const API_ASCENDING = "&sort=created&sortOrder=asc";
export const API_DESCENDING = "&sort=created&sortOrder=desc";

export const API_POSTS_ASCENDING = `${API_SOCIAL_URL}${API_POSTS}${API_AUTHOR}${API_ASCENDING}`;
export const API_POSTS_DESCENDING = `${API_SOCIAL_URL}${API_POSTS}${API_AUTHOR}${API_DESCENDING}`;