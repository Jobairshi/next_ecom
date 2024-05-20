import axios from "axios";

export async function fetchToken(yourToken) {
  let token = null;
  axios
    .get("http://localhost:4000/protected", {
      headers: {
        "Content-Type": "application/json",
        // Include your token in the 'Authorization' header
        Authorization: `Bearer ${yourToken}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return token;
}
