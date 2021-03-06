import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

export default class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Muze 3D - Make your own VR Museums</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3001/profile">Profile
                      <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3001/museums">Browse Museums</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3001/exhibits">Browse Exhibits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => {
                                    localStorage.clear()
                                    window.location.href = "http://localhost:3001/"
                                }}>Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}