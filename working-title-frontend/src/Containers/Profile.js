import React from 'react'

export default class Profile extends React.Component {

    state = {
        currentDisplay: "",
        userData: [],
        currentUser: 1,
        currentUserData: ""
    }

    handleClick = (status) => {
        this.setState({ currentDisplay: status })
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(userData => {
                this.setState({
                    userData
                })
                this.setCurrentUserData(userData, this.state.currentUser)
            })
    }

    setCurrentUserData = (userData, id) => {
        this.setState({ currentUserData: userData[id] })
    }

    render() {
        const currentDisplay = this.state.currentDisplay
        let display
        switch (currentDisplay) {

            default:
                display = <div>This is the default div. Boop</div>
        }

        let userData = this.state.currentUserData

        return (
            <div>
                {display}
                <li>Username: {userData.username}</li>
                <li>Password: {userData.password_digest}</li>
                <li>Bio: {userData.bio}</li>
                <li>Museums: {userData.museums
                    ? userData.museums.map(museum => <li>{museum.name}</li>)
                    : "You haven't created any museums yet!"}
                </li>
                <li>Favorite Museums: {userData.favorite_museums
                    ? userData.favorite_museums.map(museum => <li>{museum.name}</li>)
                    : "You haven't liked any museums yet!"}
                </li>
                <img src="https://lh3.googleusercontent.com/e4o2aXJCbJQ1NkA6zLl8MTfwLFujGJ81kOBT2PQK4nbV8RnI2Cq-Jrw0QzBcsnYMk5ujoD1J45k2xHV7dj6n5gMXZ-jJYfs08CDinf5YPFhchcKALgNVLitOR7bcYtg8lyBM8rIivg=w473-h630-no" alt="link broken" />
            </div>
        )
    }

}