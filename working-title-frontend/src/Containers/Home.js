import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

export default class Home extends React.Component {

    render() {
        return (

            <div>
                <h1>Welcome to the Working Title Virtual Museum!</h1>
                <h2>Please log in or sign up to continue</h2>
                <a href="/login"><button>Log In / Sign Up Here!</button></a>
            </div>

        )
    }
}