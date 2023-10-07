import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services";
import style from "../styles/createPosts.module.css";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const getPosts = async () => {
    const { data }: any = await fetchPosts();
  };
  useEffect(() => {
    if (!loading) {
      getPosts();
    }
  }, []);

  return (
    <div style={{ margin: "10px 20px 20px 85px" }}>
      <div className={style.header}>Create Post</div>
    </div>
  );
}

export default AllPosts;
