import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import Login from './Login.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import Form from './Products.jsx'
import EmployeeForm from './Employees'
import PurchaseForm from './Purchases'
import SupplierForm from './Suppliers'
import SalesComponent from './Sales.jsx'
import ItemComponent from './Items'

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" component={Login}/>
                            <AuthenticatedRoute path="/welcome" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/products" component={Form}/>
                            <AuthenticatedRoute path="/employees" component={EmployeeForm}/>
                            <AuthenticatedRoute path="/purchases" component={PurchaseForm}/>
                            <AuthenticatedRoute path="/suppliers" component={SupplierForm}/>
                            <AuthenticatedRoute path="/sales" component={SalesComponent}/>
                            <AuthenticatedRoute path="/items" component={ItemComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp