import React from 'react'

export default class VrPoral extends React.Component {

    componentDidMount() {
        this.props.loggedIn(this.props.history)
    }

    render() {
        return (
            <div>
                <a href="http://localhost:8081/index.html">
                    <button>Vr Portal</button>
                </a>
            </div>
        )
    }

}