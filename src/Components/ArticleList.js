import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../actions/articles";
import { Link } from "react-router-dom";
import Loading from "../Containers/Loading";

class ArticleList extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <>
        {this.props.isLoading === true ? (
          <Loading />
        ) : (
          this.props.articles.map((post) => (
            <React.Fragment key={post.id}>
              <Link to={`article-detail/${post.title_mod}`}>
                <div className="text-success">{post.title}</div>
                <p>
                  {post.content}
                  <br />
                  {post.timestamp}
                </p>
                <hr />
              </Link>
              {this.props.isLoading}
            </React.Fragment>
          ))
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  isLoading: state.articles.isLoading,
});

export default connect(mapStateToProps, { getArticles })(ArticleList);
