import * as React from "react";
import CreatePost from "../pages/CreatePost";
import AllPosts from "../pages/AllPosts";
import { Routes, Route } from "react-router-dom";

export default function SideBar() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </React.StrictMode>
  );
}
