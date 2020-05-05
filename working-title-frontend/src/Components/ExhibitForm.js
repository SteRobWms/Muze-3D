import React from 'react';

export default class ExhibitForm extends React.Component {

    state = {}

    componentDidMount() {
        fetch(`http://localhost:3000/users/${localStorage.user}`)
            .then(response => response.json())
            .then(data => this.setState({ user: data }))
    }

    submitExhibit = (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Accept": "application/json"
            },
            body: formData
        }
        return fetch("http://localhost:3000/exhibits", config)
            .then(res => res.json());
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        this.submitExhibit(formData)
            .then(console.log)
            .catch(console.error);
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor="museum_id">Museum
                    <select type="select" name="museum_id" required>
                        <option>Select a Museum</option>
                        {this.state.user && this.state.user.museums.length > 0
                            ? this.state.user.museums.map(museum => { return (<option key={museum.id} value={museum.id}>{museum.name}</option>) })
                            : null}
                    </select>
                </label><br />
                <label htmlFor="name">Exhibit Name
                <input type="text" name="name" required />
                </label><br />
                <label htmlFor="description">Description
                <input type="text" name="description" required />
                </label><br />
                <label htmlFor="background_image">Upload Image
                <input type="file" name="background_image" accept="image/*" />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        )
    };
}