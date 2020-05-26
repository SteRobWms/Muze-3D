import React from 'react'
import '../../src/index.css'

export default class SignUp extends React.Component {

    handleChange = (e) => {
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
            < div className="container-fluid" >
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4">Welcome to Muze3D! Sign up here</h3>
                                        <form name="register" onSubmit={(e) => this.signUp(e)}>
                                            <div className="form-label-group">
                                                <input type="text" onChange={(e) => this.handleChange(e)} name="username" id="inputEmail" className="form-control" placeholder="User Name" required autoFocus />
                                                <label htmlFor="inputEmail">User Name</label>
                                            </div>

                                            <div className="form-label-group">
                                                <input type="password" onChange={(e) => this.handleChange(e)} id="inputPassword" name="password" className="form-control" placeholder="Password" required />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Register</button>
                                            <div className="text-center">
                                                <a className="small" href="http://localhost:3001/login">Already Signed up? Log in here!</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}