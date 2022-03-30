import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNext5Posts } from "../store/feed/actions";
import { selectFeedPosts } from "../store/feed/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);
  console.log("posts", posts);
  return (
    <div>
      <h2>Post Feed</h2>
      {!posts
        ? "loading"
        : posts.map((post) => (
            <p>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </p>
          ))}

      <button
        onClick={() => {
          dispatch(fetchNext5Posts);
        }}
      >
        Load More
      </button>
    </div>
  );
}
