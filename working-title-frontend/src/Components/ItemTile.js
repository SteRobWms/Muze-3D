import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'


export default class ItemTile extends React.Component {

    render() {
        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.image} alt={this.props.name} />
                    <div className="card-body">
                        <h4 className="card-title">Item Name: {this.props.name}</h4>
                        <p className="card-text">Creator/Source: {this.props.creator}</p>
                        <p className="card-text">Description: {this.props.description}</p>
                        <p className="card-text">Year: {this.props.year_of_origin}</p>
                        <p className="card-text">Item Code: {this.props.item_code}</p>
                    </div>
                </div>
            </div >
        )
    }
}