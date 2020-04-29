import React from 'react'
import ExhibitContainer from './ExhibitContainer'
import ItemContainer from './ItemContainer'
import LoginContainer from './LoginContainer'
import MuseumContainer from './MuseumContainer'
import Profile from './Profile'

export default class DynamicComponent extends React.Component {

    render() {
        const currentDisplay = this.props.currentDisplay
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
                display = <Profile />
                break;
            default:
                display =
                    <div>
                        You're at the placeholder display. Please login or register to continue.
                    </div>
        }

        return (
            <div>
                {display}
            </div>
        )
    }

}