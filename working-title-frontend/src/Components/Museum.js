import React from 'react'
import ExhibitTile from './ExhibitTile'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

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
                else { alert(data.message); window.location.href = `http://localhost:3001/profile` }
            })
        // .then(alert("Room Deleted Successfully"))
    }

    render() {
        if (this.state.museum) {
            return (
                <div>
                    <div className="container">
                        <header className="jumbotron my-4" style={{ backgroundImage: `url(${this.state.museum.background_image})` }}>
                            <h1 className="display-3" style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>{this.state.museum.name}</h1>
                            <h2 style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>Description: {this.state.museum.description}
                            </h2>
                            <br />
                            {this.state.museum.creator.id === parseInt(localStorage.user)
                                ? <a href={`http://localhost:3001/exhibits/new`}>
                                    <button type="button" className="btn btn-primary btn-lg" style={{ color: "white" }}>
                                        Create a New Exhibit
                                </button>
                                </a>
                                : false
                            }
                            <br /><br />
                        </header>
                        <h3>
                            {(this.state.museum.creator.id === parseInt(localStorage.user)) && this.state.museum.exhibits.length === 0
                                ? <button type="button" className="btn btn-primary btn-lg" style={{ color: "white" }} onClick={() => this.deleteMuseum()}>
                                    Delete this Museum
                            </button>
                                : false
                            }
                        </h3>
                        {/* <img src={this.state.museum.background_image} alt={this.state.name} />
                        <h3>Description: {this.state.museum.description}</h3>
                        <h3>City: {this.state.museum.city}</h3>
                        <h3>State: {this.state.museum.state}</h3>
                        <h3>Country: {this.state.museum.country}</h3>
                        <h3>Category: {this.state.museum.category}</h3> */}
                        <br />
                        <h2>Exhibits: </h2>
                        <div className="row text-center">
                            {this.state.museum.exhibits.length > 0
                                ? this.state.museum.exhibits.map((exhibit, idx) => {
                                    let museum = { city: this.state.museum.city, country: this.state.museum.country }
                                    return (
                                        <a href={`http://localhost:3001/exhibits/${exhibit.id}`} key={idx}>
                                            <ExhibitTile {...exhibit} museum={museum} />
                                        </a>
                                    )
                                })
                                : <h3 style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>This museum has no Exhibits yet</h3>
                            }
                        </div>
                    </div>
                </div >
            )
        }
        else { return ("loading...") }
    }
}