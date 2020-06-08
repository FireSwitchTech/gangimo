import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: "",
      name: "",
      email: "",
      password: "",
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
    const endPoint = "https://api.gangimo.com";
    const { name, email, password } = this.state;
    axios
      .post(
        `${endPoint}/?apptoken=T9H1E6KUYM&action=100&fullname=${name}&email=${email}&pword=${password}`,
      )
      .then((res) => {
        console.log(JSON.stringify(res.data));
        this.setState({
          isLoading: false,
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

  render() {
    return (
      <>
        {this.state.isLoading ? (
          "Loading..."
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="enter name"
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="enter email"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button type="submit">Register</button>
          </form>
        )}
      </>
    );
  }
}

export default Register;
