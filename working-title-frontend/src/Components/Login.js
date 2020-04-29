import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form name="login" onSubmit={null}>
                    <label>Username</label>
                    <input onChange={null} name="username" type="text" />
                    <label>Password</label>
                    <input onChange={null} name="password" type="password" />
                    <input type="submit" />
                </form>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }

}