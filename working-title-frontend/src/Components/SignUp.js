import React from 'react'
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {

    handleChange = (e) => {
        // console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Nests the login function within the signup to collapse two steps into one. On
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
            .then(message => {
                // Stop everything else if error
                if (message.error) {
                    return alert(message.error)
                }
                // START OF THE NESTED LOGIN
                fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password
                    })
                })
                    .then(response => response.json())
                    .then(userInfo => {
                        localStorage.token = userInfo.token
                        this.props.setUserLocalStorage(userInfo.user.id)
                    })
                    // Redirect to profile, having set the same localStorage as the login page would have
                    .then(() => this.props.history.push("/profile"))
            })
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form name="register" onSubmit={(e) => this.signUp(e)}>
                    <label>Username</label>
                    <input onChange={(e) => this.handleChange(e)} name="username" type="text" required />
                    <label>Password</label>
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" required />
                    <input type="submit" />
                </form>
                <Link to="/login">Log In</Link>
            </div>
        )
    }

}