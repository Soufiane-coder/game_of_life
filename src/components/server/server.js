// export const myServer = "https://gameoflifeserver.000webhostapp.com";

let myServer;
if (process.env.NODE_ENV === "development") {
  myServer = "http://localhost/Game%20Of%20Life";
} else {
  myServer = "https://gameoflifeserver.000webhostapp.com";
}
export default myServer;
