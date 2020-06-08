import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NewPost from "./Components/NewPost";
import ArticleDetail from "./Components/ArticleDetail";
import ArticleList from "./Components/ArticleList";

const BaseRouter = () => {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/newpost" component={NewPost} exact />
      <Route path="/article-detail/:title_mod" component={ArticleDetail} />
      <Route path="/article-list" component={ArticleList} exact />
    </>
  );
};

export default BaseRouter;
