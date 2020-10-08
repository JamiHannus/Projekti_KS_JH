import React from "react";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      succMsg: "",
      errorMsg: "",
    };
    this.reset = this.reset.bind(this);
  }
  setValue(e) {
    let id = e.target.id;
    let value = e.target.value;
    let username = this.state.username;
    if (value === undefined || value === "") return;
    if (id === "username") {
      username = value.toUpperCase();
      this.setState({
        username: username,
      });
    } else {
      this.setState({
        password: e.target.value,
      });
    }
  }
  submit(e) {
    if (
      this.state.username === undefined ||
      this.state.username === "" ||
      this.state.password === undefined ||
      this.state.password === ""
    ) {
      this.setState({
        errorMsg: "please enter both fields",
        succMsg: "",
      });
    } else {
      //Post here -> check if psw and user name match
      this.setState({ succMsg: "welcome", errorMsg: "" });
    }
  }

  reset() {
    let username = this.state.username;
    let password = this.state.password;
    this.setState({
      username: "",
      password: "",
      errorMsg: "",
      succMsg: "",
    });
  }

  render() {
    return (
      <div>
        <div>
          User name{" "}
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={(e) => this.setValue(e)}
          ></input>
          Password{" "}
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={(e) => this.setValue(e)}
          ></input>
        </div>
        <p>{this.state.errorMsg}</p>
        <p>{this.state.succMsg}</p>
        <button onClick={(e) => this.submit(e)}>Submit</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
