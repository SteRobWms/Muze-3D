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
                    {/* <div className="card-footer">
                        <a href={`http://localhost:3001/exhibits/${this.props.id}`} className="btn btn-primary">Visit Exhibit</a>
                    </div> */}
                </div>
            </div >
            // <a className="list" href={`http://localhost:3001/items/${this.props.id}`}>
            // <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
            //     {/* <h2>Item Name: {this.props.name ? this.props.name : "none provided"}</h2> */}
            //     <a href={this.props.image}><img style={{ maxWidth: "100px" }} src={this.props.image} alt={this.props.name} /></a>
            //     <ul>
            //         <li>Creator/Source: {this.props.creator ? this.props.creator : "unknown"}</li>
            //         <li>Description: {this.props.description ? this.props.description : "unknown"}</li>
            //         <li>Year: {this.props.year_of_origin ? this.props.year_of_origin : "unknown"}</li>
            //         <li>Item Code: {this.props.item_code ? this.props.item_code : "n/a"}</li>
            //     </ul>
            // </div>
            // </a>

        )
    }
}