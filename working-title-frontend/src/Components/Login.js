import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {

    handleChange = (e) => {
        // console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()
        e.target.reset()

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
                if (userInfo.error) {
                    return alert(userInfo.error)
                }
                localStorage.token = userInfo.token
                this.props.setUserLocalStorage(userInfo.user.id)
                this.props.history.push("/profile")
            })
        // .then(() => this.props.history.push("/profile"))
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form name="login" onSubmit={(e) => this.login(e)}>
                    <label>Username</label>
                    <input onChange={(e) => this.handleChange(e)} name="username" type="text" required />
                    <label>Password</label>
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" required />
                    <input type="submit" />
                </form>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }

}