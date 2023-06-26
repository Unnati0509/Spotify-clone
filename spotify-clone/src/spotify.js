//This is not a component it contains the logic
export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";

const clientId = "e111da8f27e545b591efdcfc588f11b8";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
