import React from 'react'

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form name="login" onSubmit={null}>
                    <label>Username</label>
                    <input name="username" type="text" />
                    <label>Password</label>
                    <input name="password" type="password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }

}