import React from "react";
import AuthenticationService from './AuthenticationService.js';
import { hasSubmitFailed } from "redux-form";
import ErrorComponent from "./ErrorComponent.jsx";

export default class PurchaseForm extends React.Component {

  state = {
    name: "",
    category: "",
    total: ""
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
        category: "",
        total: ""
    });
  };

  render() {

    if (AuthenticationService.hasManagerAccess())
    return (
        <div>
        <h1> Add Order </h1>
        <div className="container">
      <form>
      <div class="form-group">
        <input
          name="name"
          placeholder="Order Name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name="category"
          placeholder="Category"
          value={this.state.category}
          onChange={e => this.change(e)}
        />
        </div>
        <div class="form-group">
        <input
          name="total"
          placeholder="Total"
          value={this.state.total}
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