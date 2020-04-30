import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Link className={"navBarButton"} to="/login">Login / Sign Up</Link>
                <Link className={"navBarButton"} to="/profile">Profile</Link>
                <Link className={"navBarButton"} to="/museums">Museums</Link>
                <Link className={"navBarButton"} to="/exhibits">Exhibits</Link>
                <Link className={"navBarButton"} to="/items">Items</Link>
                <Link className={"navBarButton"} to="/vrportal">VR Portal</Link>
                <button onClick={() => {
                    localStorage.clear()
                    window.location.href = "http://localhost:3001/"
                }}>Logout</button>
            </div>
        )
    }


}