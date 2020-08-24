import React, { Component } from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import './general.css'
import AuthenticationService from './AuthenticationService'

export default class Login extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            username: "rahul",
            password: "rahul",
            position: "admin",
            showSuccessMessage: false,
            hasLoginFailed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }
    
    handleChange(event){
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {

        if (this.state.username === "rahul" && this.state.password === "rahul") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.position)
            this.props.history.push("/welcome")
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed:false})

        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed:true})
        }
    }

    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <form>
                    <ShowInvalidCrdentials hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
                    <div class="form-group">
                    User Name: <input type="text" name="username"  value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                    Position: <select name="position" value={this.state.position} onChange={this.handleChange}>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="clerk">Clerk</option>
                    </select>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

function ShowInvalidCrdentials(props){
    if(props.hasLoginFailed) {
        return <div className="alert alert-warning">Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login successful</div>
    }
    return null
}

class ErrorComponent extends Component {
    render(){
        return (
            <div>Error 404: INVALID URL</div>
        )
    }
}