import React from "react";
import AuthenticationService from './AuthenticationService.js';
import { hasSubmitFailed } from "redux-form";
import ErrorComponent from "./ErrorComponent.jsx";

export default class SupplierForm extends React.Component {

  state = {
    name: "",
    location: ""
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
        name: "",
        location: ""
    });
  };

  render() {

    if (AuthenticationService.hasManagerAccess())
    return (
        <div>
        <h1> Add Supplier </h1>
        <div className="container">
      <form>
      <div class="form-group">
        <input
          name="name"
          placeholder="Supplier Name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name= "location"
          placeholder= "Location"
          value={this.state.location}
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