import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticle } from "../actions/articles";
import Loading from "../Containers/Loading";

class ArticleDetail extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.title_mod);
  }

  render() {
    const renderHTML = (rawHTML: string) =>
      React.createElement("div", {
        dangerouslySetInnerHTML: { __html: rawHTML },
      });
    return (
      <>
        {this.props.isLoading === false ? (
          <Loading />
        ) : (
          <div>
            <div className="text-center text-success">
              <p>{this.props.article.title}</p>
            </div>
            {renderHTML(this.props.article.content)}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  article: state.articles.article,
  isLoading: state.articles.isLoading,
});

export default connect(mapStateToProps, { getArticle })(ArticleDetail);
