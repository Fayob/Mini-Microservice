import React from "react";
import PostList from "./PostLists";
import PostsCreate from "./PostsCreate";

const App = () => {
  return <div className="container">
    <h1> Create Post </h1>
    <PostsCreate />

    <h2 className="mt-5"> All Posts</h2>
    <PostList />
  </div>;
};

export default App;
