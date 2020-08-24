import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const hasManagerAccess = AuthenticationService.hasManagerAccess();
        const hasClerkAccess = AuthenticationService.hasClerkAccess();
        const hasAdminAccess = AuthenticationService.hasAdminAccess();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">WALMART</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                        {hasManagerAccess && <li><Link className="nav-link" to="/products">Products</Link></li>}
                        {hasManagerAccess && <li><Link className="nav-link" to="/purchases">Purchases</Link></li>}
                        {hasManagerAccess && <li><Link className="nav-link" to="/suppliers">Suppliers</Link></li>}
                        {hasManagerAccess && <li><Link className="nav-link" to="/sales">Sales</Link></li>}
                        {hasClerkAccess && <li><Link className="nav-link" to="/items">Items</Link></li>}
                        {hasAdminAccess && <li><Link className="nav-link" to="/employees">Employees</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent