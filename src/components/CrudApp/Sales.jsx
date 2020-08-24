import React, {Component} from "react";
import AuthenticationService from './AuthenticationService.js';
import { hasSubmitFailed } from "redux-form";
import ErrorComponent from "./ErrorComponent.jsx";

export default class SalesComponent extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            grain: "week",
            groupby: "salesperson"
        }
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange(event){
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div>
                <h1>List Sales By:</h1>
                <form>
                <div class="form-group">
                    Time Grain: <select name="grain" value={this.state.position} onChange={this.handleChange}>
                        <option value="week">Weekly</option>
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                    </select>
                    </div>
                    <div class="form-group">
                    GroupBy: <select name="groupby" value={this.state.position} onChange={this.handleChange}>
                        <option value="salesperson">Salesperson</option>
                        <option value="product">Product</option>
                    </select>
                    </div>
                    <button className="btn btn-success" onClick={this.loginClicked}>Submit</button>
                
                </form>
            </div>
        )
    }
}
