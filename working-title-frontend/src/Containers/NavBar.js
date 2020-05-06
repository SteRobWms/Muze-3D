import React from 'react'

export default class NavBar extends React.Component {

    // componentDidMount() {
    //     this.props.loggedInTrue()
    // }

    render() {
        return (
            <div className={"navBar"}>
                <a href="http://localhost:3001/profile"><button className={"navBarButton"}>Profile</button></a>
                <a href="http://localhost:3001/museums"><button className={"navBarButton"}>Museums</button></a>
                <a href="http://localhost:3001/exhibits"><button className={"navBarButton"}>Exhibits</button></a>
                <a href="http://localhost:3001/items"><button className={"navBarButton"}>Items</button></a>
                <a href="http://localhost:3001/vrportal"><button className={"navBarButton"}>VR Portal</button></a>
                <button className={"navBarButton"} onClick={() => {
                    localStorage.clear()
                    window.location.href = "http://localhost:3001/"
                }}>Logout</button>
            </div>
        )
    }

}