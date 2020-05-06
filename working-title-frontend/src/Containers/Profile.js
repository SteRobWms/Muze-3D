import React from 'react'
import MuseumTile from '../Components/MuseumTile'
import ExhibitTile from '../Components/ExhibitTile'
import EditUserForm from '../Components/EditUserForm'

export default class Profile extends React.Component {

    state = {
        showEdit: false
    }

    updateBioState = (bio) => {
        this.setState({
            ...this.state,
            user: { ...this.state.user, bio }
        })
    }
    getUserInfo = () => {
        fetch(`http://localhost:3000/users/${localStorage.user}`)
            .then(response => response.json())
            .then(user => {
                if (user.error) {
                    return console.log(user.error, ": Here's a muffin.")
                }
                else { this.setState({ ...this.state, user: user }) }
            })
    }

    toggleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    componentDidMount() {
        this.props.loggedIn(this.props.history)
        this.getUserInfo()
    }

    render() {
        if (this.state.user) {
            return (
                <div>
                    <h1>Username: {this.state.user.username}</h1>

                    <h2>Bio: {this.state.user.bio}</h2>
                    <button onClick={this.toggleEdit}>Edit Bio</button>
                    {this.state.showEdit ? <EditUserForm {...this.state} handleSubmit={this.handleSubmit} toggleEdit={this.toggleEdit} updateBioState={this.updateBioState} /> : null}


                    <h2>Museums:</h2>
                    <a href={`http://localhost:3001/museums/new`}>
                        <button>
                            Create a New Museum!
                        </button>
                    </a>
                    {this.state.user.museums.length > 0
                        ? this.state.user.museums.map((museum, idx) => <MuseumTile key={idx} {...museum} />)
                        : <h4>"You haven't created any museums yet!"</h4>}


                    {/* <h2>Favorite Museums:</h2> {this.state.user.favorite_museums
                        ? this.state.user.favorite_museums.map((museum, idx) => <MuseumTile key={idx} {...museum} />)
                        : <h4>"You haven't liked any museums yet!"</h4>} */}

                    <h2>Exhibits:</h2> {this.state.user.exhibits.length > 0
                        ? this.state.user.exhibits.map((exhibit, idx) => <ExhibitTile key={idx} {...exhibit} />)
                        : <h4>"You haven't created any exhibits yet!"</h4>}


                    {/* <h2>Favorite exhibits:</h2> {this.state.user.favorite_exhibits
                        ? this.state.user.favorite_exhibits.map((exhibit, idx) => <ExhibitTile key={idx} {...exhibit} />)
                        : <h4>"You haven't liked any exhibits yet!"</h4>} */}
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