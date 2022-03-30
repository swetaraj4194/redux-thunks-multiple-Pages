import axios from "axios";
import { config } from "../../config"; 


export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  const res = await axios.get(`${config.API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = res.data.rows;

  dispatch(postsFetched(morePosts));
}
