import React from 'react'

export default class Museum extends React.Component {

    state = {
        museum: {
            id: "",
            name: "",
            category: "",
            city: ""
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/museums/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ museum: data })
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h3>Name: {this.state.museum.name}</h3>
                <h3>Category: {this.state.museum.category}</h3>
                <h3>City: {this.state.museum.city}</h3>
            </div>
        )
    }
}