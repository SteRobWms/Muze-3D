import React from 'react'
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {

    handleChange = (e) => {
        // console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        e.target.reset()

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
            .then(response => response.json())
            .then(console.log)
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form name="register" onSubmit={(e) => this.signUp(e)}>
                    <label>Username</label>
                    <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
                    <label>Password</label>
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
                    <input type="submit" />
                </form>
                <Link to="/login">Log In</Link>
            </div>
        )
    }

}