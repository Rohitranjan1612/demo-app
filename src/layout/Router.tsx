import * as React from "react";
import AllFpoDetails from "../pages/AllFpoDetails";
import CreateFpoDetails from "../pages/CreateFpoDetails";
import AllPosts from "../pages/AllPosts";
import { Routes, Route } from "react-router-dom";

export default function SideBar() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/create-fpo-details" element={<CreateFpoDetails />} />
        <Route path="/all-fpo-details" element={<AllFpoDetails />} />
      </Routes>
    </React.StrictMode>
  );
}
