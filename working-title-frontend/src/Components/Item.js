import React from 'react'

export default class Item extends React.Component {

    state = {}

    componentDidMount() {
        fetch(`http://localhost:3000/items/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ item: data })
                console.log(data)
            })
    }

    render() {
        if (this.state.item) {
            return (
                <div className="show">
                    <h3>Name: {this.state.item.name}</h3>
                    <img src={this.state.item.image} alt={this.state.item.name} />
                    <h3>Description: {this.state.item.description}</h3>
                    <h3>Item Code: {this.state.item.item_code}</h3>
                    <h3>Creator/Source: {this.state.item.creator}</h3>
                    <h3>From: {this.state.item.country_of_origin}</h3>
                    <h2>Current Location:</h2>
                    <a href={`http://localhost:3001/museums/${this.state.item.museum.id}`}>
                        <h3>Museum: {this.state.item.museum.name}</h3>
                    </a>
                    <a href={`http://localhost:3001/exhibits/${this.state.item.exhibit.id}`}>
                        <h3>Exhibit: {this.state.item.exhibit.name}</h3>
                    </a>
                    <h3>City: {this.state.item.museum.city}</h3>
                    <h3>Country: {this.state.item.museum.country}</h3>
                </div>
            )
        }
        else { return ("loading...") }
    }
}