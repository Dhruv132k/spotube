// All the spotify logic not a component

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/"
const clientId = "99625eb7a04548adbc485dba62904a76"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]; //Basically these are the operations that I can do in my clone app. When you will click on login the spotify page will show what all things spotube can do

//For thw following function let's say url=http://example.com/#access_token=12345&token_type=bearer&expires_in=3600

export const getTokenFromUrl = () => {
    return window.location.hash // this returns: '#access_token=12345&token_type=bearer&expires_in=3600'
        .substring(1) // this returns: 'access_token=12345&token_type=bearer&expires_in=3600'
        .split('&') // this splits into an array: ['access_token=12345', 'token_type=bearer', 'expires_in=3600']
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {}); // initial value for reduce is an empty object
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true` //We are using `` because i want to have string as well as js. Once the user is authenticated give me back the token 
