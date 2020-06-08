import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: "",
      email: "",
      password: "",
      fullname: "",
      userToken: "",
      message: "",
      response: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    const { email, password } = this.state;
    const endPoint = "https://api.gangimo.com";
    axios
      .post(
        `${endPoint}/?apptoken=T9H1E6KUYM&action=200&email=${email}&pword=${password}`,
      )
      .then((res) => {
        console.log(JSON.stringify(res.data));
        const userData = res.data;
        localStorage.setItem("token", res.data.usertoken);
        localStorage.setItem("username", res.data.fullname);
        localStorage.setItem("email", res.data.email);
        this.setState({
          isLoading: false,
          fullname: userData["fullname"],
          userToken: userData["usertoken"],
          message: userData["message"],
          response: userData["response"],
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: error,
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <>
        {this.state.isLoading ? (
          "Loading..."
        ) : (
          <>
            {this.state.response === "201" ? (
              this.state.message + " Hello " + localStorage.getItem("email")
            ) : (
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            )}
          </>
        )}
      </>
    );
  }
}

export default Login;
