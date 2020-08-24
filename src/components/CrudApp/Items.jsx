import React from "react";
import AuthenticationService from './AuthenticationService.js';
import { hasSubmitFailed } from "redux-form";
import ErrorComponent from "./ErrorComponent.jsx";

export default class ItemComponent extends React.Component {

  state = {
    name: "",
    category: "",
    price: ""
  };

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
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
        price: ""
    });
  };

  render() {

    if (AuthenticationService.hasClerkAccess())
    return (
        <div>
        <h1> Add Item </h1>
        <div className="form-group">
      <form>
        <div class="form-group"> 
        <input
          name="name"
          placeholder="Item Name"
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
          name="price"
          placeholder="Price"
          value={this.state.price}
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