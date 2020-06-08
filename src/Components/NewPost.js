import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/articles";

export class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      userToken: localStorage.getItem("token"),
      catid: "",
      title: "",
      content: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const { catid, title, content, userToken } = this.state;
    this.props.addArticle(catid, title, content, userToken);
  }

  render() {
    return (
      <div>
        {this.state.message}
        {this.state.isLoading ? (
          "Loading..."
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="categoryID">Category ID</label>
              <input
                type="number"
                className="form-control"
                id="categoryID"
                name="catid"
                value={this.state.catid}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input
                type="text"
                className="form-control"
                id="Title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Content</label>
              <textarea
                className="form-control"
                id="Content"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default connect(null, { addArticle })(NewPost);
