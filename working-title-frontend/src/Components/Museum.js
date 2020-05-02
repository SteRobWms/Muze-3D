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
                <img src={this.state.museum.background_image} alt={this.state.name} />
                <h3>Description: {this.state.museum.description}</h3>
                <h3>City: {this.state.museum.city}</h3>
                <h3>State: {this.state.museum.state}</h3>
                <h3>Country: {this.state.museum.country}</h3>
                <h3>Category: {this.state.museum.category}</h3>
            </div>
        )
    }
}
// {
//     "museum": {
//       "id": 1,
//       "user_id": 1,
//       "name": "Cullen Sculpture Garden",
//       "description": "A collection of original and replica sculptures connected to the Glassell School of Art, placed in a park environment",
//       "country": "USA",
//       "state": "Texas",
//       "city": "Houston",
//       "category": "Art",
//       "background_image": "https://picsum.photos/200",
//       "created_at": "2020-05-01T19:28:12.200Z",
//       "updated_at": "2020-05-01T19:28:12.200Z"
//     }
//   }