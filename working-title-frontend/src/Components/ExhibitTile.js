import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

export default class ExhibitTile extends React.Component {

    render() {
        return (

            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.background_image} alt={this.props.name} />
                    <div className="card-body">
                        <h4 className="card-title">Exhibit Name: {this.props.name}</h4>
                        <p className="card-text">Description: {this.props.description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={`http://localhost:3001/exhibits/${this.props.id}`} className="btn btn-primary">Visit Exhibit</a>
                    </div>
                </div>
            </div >

            //         <h2>Exhibit Name: {this.props.name}</h2>
            //         <img src={this.props.background_image} alt={this.props.name} />
            //         <h3>Description: {this.props.description}</h3>
            //         <h3>City: {this.props.museum.city}</h3>
            //         <h3>Country: {this.props.museum.country}</h3>
        )
    }
}