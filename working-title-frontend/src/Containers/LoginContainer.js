import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'

export default class LoginContainer extends React.Component {

    state = {
        currentDisplay: "login"
    }

    handleClick = (status) => {
        this.setState({ currentDisplay: status })
    }

    render() {
        const currentDisplay = this.state.currentDisplay
        let display
        switch (currentDisplay) {
            case "login":
                display = <Login />
                break;
            case "register":
                display = <Register />
                break;
            default:
                display = <Login />
        }

        return (
            <div>
                {display}
                <button onClick={() => this.handleClick('register')}>Go to Register</button>
                <button onClick={() => this.handleClick('login')}>Go to Login</button>
            </div>
        )
    }

}