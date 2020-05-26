import React from 'react'
import MuseumTile from '../Components/MuseumTile'
import ExhibitTile from '../Components/ExhibitTile'
import EditUserForm from '../Components/EditUserForm'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

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

    // functionality for the edit bio
    toggleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()

        fetch(`http://localhost:3000/users/${localStorage.getItem("user")}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
                user: {
                    bio: this.state.bio
                }
            })
        })
            .then(response => response.json())
            .then(user => { this.updateBioState(user.bio) })
    }


    componentDidMount() {
        this.props.loggedIn(this.props.history)
        this.getUserInfo()
    }

    render() {
        if (this.state.user) {
            return (
                <div>
                    <div className="container">

                        <header className="jumbotron my-4" style={{ backgroundImage: "url(http://picsum.photos/1000)" }}>
                            <h1 className="display-3" style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>{this.state.user.username}'s Profile</h1>
                            <h2 style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>Bio: {this.state.user.bio}
                            </h2>
                            <br />
                            <button type="button" className="btn btn-primary btn-lg" style={{ backgroundColor: "", color: "white" }} onClick={() => this.toggleEdit()} data-target="#editForm">Update Bio!</button><br /><br />

                            {this.state.showEdit ? <EditUserForm {...this.state} handleSubmit={this.handleSubmit} toggleEdit={this.toggleEdit} updateBioState={this.updateBioState} /> : null}
                        </header>

                        <h2>Your Museums:   <span style={{ color: "white" }}>:</span>
                            <a className="btn btn-primary btn-lg" href={`http://localhost:3001/museums/new`}>
                                Create a New Museum!
                            </a>
                        </h2>
                        <br />
                        <div className="row text-center">

                            {this.state.user.museums.length > 0
                                ? this.state.user.museums.map((museum, idx) => <MuseumTile key={idx} {...museum} />)
                                : <h4>"You haven't created any museums yet!"</h4>}

                        </div>
                        <hr /><br />
                        <h2>Your Exhibits</h2>
                        <br />
                        <div className="row text-center">
                            {this.state.user.exhibits.length > 0
                                ? this.state.user.exhibits.map((exhibit, idx) => <ExhibitTile key={idx} {...exhibit} />)
                                : <h4>"You haven't created any exhibits yet!"</h4>}
                        </div>

                    </div>

                    <footer className="py-5 bg-dark">
                        <div className="container">
                            <p className="m-0 text-center text-white">Copyright &copy; Muze 3D 2020</p>
                        </div>
                    </footer>
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