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
                    <h2>Museums:</h2> {this.state.user.museums.length > 0
                        ? this.state.user.museums.map(museum => <h4>{museum.name}</h4>)
                        : <h4>"You haven't created any museums yet!"</h4>}
                    <h2>Favorite Museums:</h2> {this.state.user.favorite_museums
                        ? this.state.user.favorite_museums.map(museum => <h4>{museum.name}</h4>)
                        : <h4>"You haven't liked any museums yet!"</h4>}
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