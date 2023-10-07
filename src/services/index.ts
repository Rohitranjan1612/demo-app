import axios from "axios";

export function fetchPosts() {
  return axios
    .get("https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a")
    .then((response) => {
      console.log({ response });
      return response;
    })
    .catch((error) => {
      console.error({ error });
    });
}
