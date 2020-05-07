import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

export default class MuseumTile extends React.Component {

    render() {
        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.background_image} alt={this.props.name} />
                    <div className="card-body">
                        <h4 className="card-title">Museum Name: {this.props.name}</h4>
                        <p className="card-text">Description: {this.props.description}</p>
                        <p className="card-text">City: {this.props.city}</p>
                        <p className="card-text">Country: {this.props.country}</p>
                        <p className="card-text">Category: {this.props.category}</p>
                    </div>
                    <div className="card-footer">
                        <a href={`http://localhost:3001/museums/${this.props.id}`} className="btn btn-primary">Visit Museum</a>
                    </div>
                </div>
            </div >
        )
    }
}
{/* <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
        <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
        </div>
        <div className="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
    </div>
</div> */}