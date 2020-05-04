import React from 'react'
import ExhibitTile from './ExhibitTile'

export default class Museum extends React.Component {

    state = {}

    componentDidMount() {
        fetch(`http://localhost:3000/museums/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ museum: data })
                console.log(data)
            })
    }

    render() {
        if (this.state.museum) {
            return (
                <div className="show">
                    <h3>Name: {this.state.museum.name}</h3>
                    <img src={this.state.museum.background_image} alt={this.state.name} />
                    <h3>Description: {this.state.museum.description}</h3>
                    <h3>City: {this.state.museum.city}</h3>
                    <h3>State: {this.state.museum.state}</h3>
                    <h3>Country: {this.state.museum.country}</h3>
                    <h3>Category: {this.state.museum.category}</h3>
                    {this.state.museum.exhibit_count > 0
                        ? this.state.museum.exhibits.map((exhibit, idx) => {
                            let museum = { city: this.state.museum.city, country: this.state.museum.country }
                            return (
                                <a href={`http://localhost:3001/exhibits/${exhibit.id}`} key={idx}>
                                    <ExhibitTile {...exhibit} museum={museum} />
                                </a>
                            )
                        })
                        : false
                    }
                </div>
            )
        }
        else { return ("loading...") }
    }
}