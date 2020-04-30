import React from 'react'

export default class Profile extends React.Component {

    getUserInfo = () => {
        fetch(`http://localhost:3000/users/${localStorage.user}`)
            .then(response => response.json())
            .then(user => this.setState({ user })
            )
    }

    componentDidMount() {
        this.props.loggedIn(this.props.history)
        this.getUserInfo()
    }

    render() {
        if (this.state) {
            return (
                <div>
                    <h1>Username: {this.state.user.username}</h1>
                    <h2>Bio: {this.state.user.bio}</h2>
                    <ul>Museums: {this.state.user.museums
                        ? this.state.user.museums.map(museum => <li>{museum.name}</li>)
                        : "You haven't created any museums yet!"}
                    </ul>
                    <ul>Favorite Museums: {this.state.user.favorite_museums
                        ? this.state.user.favorite_museums.map(museum => <li>{museum.name}</li>)
                        : "You haven't liked any museums yet!"}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <h2>Loading...</h2>
            )
        }
    }

}