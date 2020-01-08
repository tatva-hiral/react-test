const appUrl =
  process.env.NODE_ENV === "production" ? process.env.REACT_APP_BASE_URL : "";
/* App configuration */
export const configuration = {
  APP_URL: appUrl
};

export const endpoint = {
  GET_USER: "https://randomuser.me/api/?results=60"
};

/* Path constants */
export const Path = {
  ROOT: "/",
  USERS: "/users"
};
