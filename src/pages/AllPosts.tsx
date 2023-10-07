import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services";
import style from "../styles/allPosts.module.css";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchposts, setSearchposts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const getPosts = async () => {
    setLoading(true);
    const { data }: any = await fetchPosts();
    setPosts(data.posts);
    setTotalPage(data.posts.length / 10);
    setSearchposts(data.posts);
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      getPosts();
    }
  }, []);
  const handleSearch = (search: any) => {
    setLoading(true);
    setPage(1);
    const searchposts = posts.filter((obj: any) =>
      Object.values(obj).some((val: any) => {
        console.log({ val });

        return String(val).includes(search);
      })
    );
    setSearchposts(searchposts);
    setLoading(false);
  };
  return (
    <div style={{ margin: "10px 20px 20px 85px" }}>
      <div className={style.header}>All Posts</div>
      <input
        type="text"
        onChange={(e: any) => handleSearch(e.target.value)}
        placeholder="Search..."
        className={style.srh_field}
      />
      <table className={`table ${style.list_table}`}>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Reactions</th>
            <th>Title</th>
            <th>Body</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {searchposts && searchposts.length ? (
            searchposts
              .slice((page - 1) * 10, page * 10)
              .map((post: any, index: any) => (
                <tr key={index}>
                  <td style={{ fontSize: "16px" }}>{post.id}</td>
                  <td style={{ fontSize: "16px" }}>{post.userId}</td>
                  <td style={{ fontSize: "16px" }}>{post.reactions}</td>
                  <td style={{ fontSize: "16px" }}>{post.title}</td>
                  <td style={{ fontSize: "16px" }}>{post.body}</td>
                  <td style={{ fontSize: "16px" }}>{post.tags.join(",")}</td>
                </tr>
              ))
          ) : !loading ? (
            <tr>
              <td colSpan={8}>
                <p className={style.nodata}>No post found!</p>
              </td>
            </tr>
          ) : null}
          {loading ? (
            <tr>
              <td colSpan={8}>
                <div className={style.nodata}>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className={style.pagination}>
        <button
          onClick={() => {
            setPage(page - 1);
            setSearchposts(posts);
          }}
          disabled={page === 1}
          className={style.pagination_button}
        >
          Previous
        </button>
        <p className={style.pagination_text}>{page}</p>
        <button
          onClick={() => {
            setPage(page + 1);
            setSearchposts(posts);
          }}
          disabled={page === totalPage}
          className={style.pagination_button}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllPosts;
