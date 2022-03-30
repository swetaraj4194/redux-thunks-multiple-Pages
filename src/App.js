import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/post/:id" element={<PostPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
