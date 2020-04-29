import React from 'react'
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form name="register" onSubmit={null}>
                    <label>Username</label>
                    <input onChange={null} name="username" type="text" />
                    <label>Password</label>
                    <input onChange={null} name="password" type="password" />
                    <input type="submit" />
                </form>
                <Link to="/login">Log In</Link>
            </div>
        )
    }

}