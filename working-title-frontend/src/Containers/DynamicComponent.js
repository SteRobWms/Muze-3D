import React from 'react'
import LoginContainer from './LoginContainer'
import UserContainer from './UserContainer'

export default class DynamicComponent extends React.Component {

    state = {
        currentDisplay: "placeholder",
        loggedIn: false
    }

    loggedIn = (status) => {
        if (this.state.loggedIn !== true) {
            this.setState({ currentDisplay: 'userInfo' })
        }
        else { this.setState({ currentDisplay: 'loginContainer' }) }
    }

    handleClick = (status) => {
        this.setState({ currentDisplay: status })
    }

    render() {
        const currentDisplay = this.state.currentDisplay
        let display
        switch (currentDisplay) {
            case "loginContainer":
                display = <LoginContainer />
                break;
            case "userContainer":
                display = <UserContainer />
                break;
            case "vrPortal":
                display =
                    <div>
                        <a href="http://localhost:8081/index.html">Go to VR</a>
                    </div>
                break;
            case 'placeholder':
                display =
                    <div>
                        You're at the placeholder display. Please login or register to continue.
                    </div>
                break;
            default:
                display = <LoginContainer />
        }

        return (
            <div>
                <button onClick={() => this.handleClick('loginContainer')}>Login/Register</button>
                <button onClick={() => this.handleClick('vrPortal')}>VR Portal</button>
                <button onClick={() => this.handleClick('userContainer')}>Profile</button>
                {display}
            </div>
        )
    }

}