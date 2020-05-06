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

    deleteMuseum = () => {
        fetch(`http://localhost:3000/museums/${this.props.match.params.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) { alert(data.error) }
                else { alert(data.message); window.location.href = `http://localhost:3001/museums` }
            })
        // .then(alert("Room Deleted Successfully"))
    }

    render() {
        if (this.state.museum) {
            return (
                <div className="show">
                    <h3>Name: {this.state.museum.name}
                        {this.state.museum.creator.id === parseInt(localStorage.user)
                            ? <button onClick={() => this.deleteMuseum()}>
                                Delete this Museum (You must delete its exhibits first)
                            </button>
                            : false
                        }
                        {this.state.museum.creator.id === parseInt(localStorage.user)
                            ? <a href={`http://localhost:3001/exhibits/new`}>
                                <button>
                                    Create a New Exhibit
                                </button>
                            </a>
                            : false
                        }
                    </h3>
                    <img src={this.state.museum.background_image} alt={this.state.name} />
                    <h3>Description: {this.state.museum.description}</h3>
                    <h3>City: {this.state.museum.city}</h3>
                    <h3>State: {this.state.museum.state}</h3>
                    <h3>Country: {this.state.museum.country}</h3>
                    <h3>Category: {this.state.museum.category}</h3>
                    {this.state.museum.exhibits.length > 0
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