import axios from "axios";

export function fetchPosts() {
  return axios
    .get("https://dummyjson.com/posts")
    .then((response) => {
      console.log({ response });
      return response;
    })
    .catch((error) => {
      console.error({ error });
    });
}
