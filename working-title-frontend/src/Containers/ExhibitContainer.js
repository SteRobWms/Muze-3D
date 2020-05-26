import React from 'react'
import ExhibitTile from '../Components/ExhibitTile'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

export default class ExhibitContainer extends React.Component {

    state = {
    }

    getExhibits = () => {
        fetch('http://localhost:3000/exhibits')
            .then(response => response.json())
            .then(exhibits => {
                this.setState({
                    exhibits,
                    displayExhibits: exhibits
                })
            })
    }

    componentDidMount() {
        this.props.loggedIn(this.props.history)
        this.getExhibits()
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <header className="jumbotron my-4" style={{ backgroundImage: `url(http://picsum.photos/1100)`, backgroundSize: "100%", backgroundPosition: "center" }}>
                            <h1 className="display-3" style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>Exhibits</h1>
                            <br />
                        </header>
                        <div className="row text-center">
                            {this.state.displayExhibits
                                ? this.state.displayExhibits.map((exhibit, idx) => <ExhibitTile key={idx} {...exhibit} />)
                                : <h2>Loading...</h2>
                            }
                        </div>
                        <footer className="py-5 bg-dark">
                            <div className="container">
                                <p className="m-0 text-center text-white">Copyright &copy; Muze 3D 2020</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}