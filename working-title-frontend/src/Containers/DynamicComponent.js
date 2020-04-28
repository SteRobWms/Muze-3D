import React from 'react'
import ExhibitContainer from './ExhibitContainer'
import ItemContainer from './ItemContainer'
import LoginContainer from './LoginContainer'
import MuseumContainer from './MuseumContainer'
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
            case "exhibitContainer":
                display = <ExhibitContainer />
                break;
            case "itemContainer":
                display = <ItemContainer />
                break;
            case "loginContainer":
                display = <LoginContainer />
                break;
            case 'museumContainer':
                display = <MuseumContainer />
                break;
            case "vrPortal":
                display =
                    <div>
                        <a href="http://localhost:8081/index.html">Go to VR</a>
                    </div>
                break;
            case "userContainer":
                display = <UserContainer />
                break;
            default:
                display =
                    <div>
                        You're at the placeholder display. Please login or register to continue.
                    </div>
        }

        return (
            <div>
                <button onClick={() => this.handleClick('loginContainer')}>Login/Register</button>
                <button onClick={() => this.handleClick('vrPortal')}>VR Portal</button>
                <button onClick={() => this.handleClick('userContainer')}>Profile</button>
                <button onClick={() => this.handleClick('museumContainer')}>Browse Museums</button>
                <button onClick={() => this.handleClick('exhibitContainer')}>Browse Exhibits</button>
                <button onClick={() => this.handleClick('itemContainer')}>Browse Items</button>
                {display}
            </div>
        )
    }

}