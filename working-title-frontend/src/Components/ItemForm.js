import React from 'react';

export default class ItemForm extends React.Component {

    state = {}

    // componentDidMount() {
    //     fetch(`http://localhost:3000/items/${this.props.match.params.id}`)
    //         .then(response => response.json())
    //         .then(data => this.setState({ item: data }))
    // }

    submitItem = (roomId, formData) => {
        const config = {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Accept": "application/json"
            },
            body: formData
        }
        return fetch("http://localhost:3000/items", config)
            .then(res => res.json());
    }

    handleSubmit = (roomId, event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        this.submitExhibit(formData)
            .then(console.log)
            .catch(console.error);
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(this.props.roomId, event)}>
                <label htmlFor="name">Name
                <input type="text" name="name" required />
                </label><br />
                <label htmlFor="description">Material
                <input type="text" name="description" required />
                </label><br />
                <label htmlFor="image">Upload Image
                <input type="file" name="image" accept="image/*" />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        )
    };
}