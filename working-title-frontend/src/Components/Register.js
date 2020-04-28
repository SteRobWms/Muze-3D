import React from 'react'

export default class Register extends React.Component {

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form name="register" onSubmit={null}>
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