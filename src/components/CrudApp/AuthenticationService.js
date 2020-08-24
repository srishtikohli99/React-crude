import React, {Component} from 'react'

class AuthenticationService { 

    registerSuccessfulLogin(username, password, position){
        sessionStorage.setItem('authenticatedUser',username)
        sessionStorage.setItem('position',position)

    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('position');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    hasManagerAccess() {
        let position = sessionStorage.getItem('position')

        if (position === "manager" || position === "admin")
            return true
        else 
            return false
    }

    hasClerkAccess() {
        let position = sessionStorage.getItem('position')
        if (position === "clerk" || position === "admin")
            return true
        else 
            return false
    }

    hasAdminAccess() {
        let position = sessionStorage.getItem('position')
        if (position === "admin")
            return true
        else 
            return false
    }

}
export default new AuthenticationService()