import React from 'react'

export default class EditExhibitForm extends React.Component {

    handleChange = (e) => {
        // console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()

        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}}`, {
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
            // .then(data => { console.log(data); debugger })
            .then(user => { this.props.updateBioState(user.bio) })
    }

    render() {
        return (
            <form onSubmit={(event) => { this.handleSubmit(event); this.props.toggleEdit() }}>
                <label>Change Bio</label>
                <input onChange={(e) => this.handleChange(e)} name="bio" type="text" required />
                <input type="submit" value="Save Changes" />
            </form>
        )
    }
}