import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

    render() {
        return (

            <div>
                <h1>Welcome to the Working Title Virtual Museum!</h1>
                <h2>Please log in or sign up to continue</h2>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>

        )
    }
}