import React from 'react'
import MuseumTile from '../Components/MuseumTile'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'
// import Museum from '../Components/Museum'

export default class MuseumContainer extends React.Component {

    state = {
    }

    getMuseums = () => {
        fetch('http://localhost:3000/museums')
            .then(response => response.json())
            .then(museums => {
                this.setState({
                    museums,
                    displayMuseums: museums
                })
            })
    }

    componentDidMount() {
        this.props.loggedIn(this.props.history)
        this.getMuseums()
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <header className="jumbotron my-4" style={{ backgroundImage: `url(https://res.cloudinary.com/dalaru/image/upload/c_scale,w_759/v1588790374/8na88admhpg7al6n2vqn62qwircu.jpg)`, backgroundSize: "100%", backgroundPosition: "center" }}>
                            <h1 className="display-3" style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>Museums</h1>
                            <br />
                        </header>
                        <div className="row text-center">
                            {this.state.displayMuseums
                                ? this.state.displayMuseums.map((museum, idx) => <MuseumTile key={idx} {...museum} />)
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