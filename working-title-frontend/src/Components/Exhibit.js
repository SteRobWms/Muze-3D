import React from 'react'
import ItemTile from './ItemTile'

export default class Exhibit extends React.Component {

    state = {}

    componentDidMount() {
        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ exhibit: data })
            })
    }

    render() {
        if (this.state.exhibit) {
            return (
                <div className="show">
                    <h3>Name: {this.state.exhibit.name}</h3>
                    <img src={this.state.exhibit.background_image} alt={this.state.name} />
                    <h3>Description: {this.state.exhibit.description}</h3>
                    <h3>Museum: {this.state.exhibit.museum.name}</h3>
                    {this.state.exhibit.items.length > 0
                        ? this.state.exhibit.items.map((item, idx) => {
                            return (
                                <a href={`http://localhost:3001/items/${item.id}`} key={idx}>
                                    <ItemTile {...item} />
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