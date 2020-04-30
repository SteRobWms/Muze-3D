import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Link to="/login">Login/Register</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/museums">Museums</Link>
                <Link to="/exhibits">Exhibits</Link>
                <Link to="/items">Items</Link>
                <Link to="/vrportal">VR Portal</Link>
                <button onClick={() => localStorage.clear()}>Logout</button>

                {/* <button onClick={() => this.props.handleClick('loginContainer')}>Login/Register</button>
                <button onClick={() => this.props.handleClick('vrPortal')}>VR Portal</button>
                <button onClick={() => this.props.handleClick('userContainer')}>Profile</button>
                <button onClick={() => this.props.handleClick('museumContainer')}>Browse Museums</button>
                <button onClick={() => this.props.handleClick('exhibitContainer')}>Browse Exhibits</button>
                <button onClick={() => this.props.handleClick('itemContainer')}>Browse Items</button> */}
            </div>
        )
    }


}