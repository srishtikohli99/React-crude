import React from "react";
import AuthenticationService from './AuthenticationService.js';
import { hasSubmitFailed } from "redux-form";
import ErrorComponent from "./ErrorComponent.jsx";

export default class EmployeeForm extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {

    if (AuthenticationService.hasAdminAccess())
    return (
        <div>
        <h1> Add Employee </h1>
        <div className="container">
      <form>
      <div class="form-group">
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        </div>
        <button className="btn btn-success" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
      <br />
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-danger">Delete</button>
      </div>
    
    );
    else
    return ErrorComponent
  }
}