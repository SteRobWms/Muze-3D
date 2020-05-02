import React from 'react'
import MuseumTile from '../Components/MuseumTile'
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
                {this.state.displayMuseums
                    ? this.state.displayMuseums.map((museum) => {
                        return (
                            <a className="list" href={`http://localhost:3001/museums/${museum.id}`}>
                                <MuseumTile {...museum} />
                                {/* <div>
                                    Name: {museum.name}<br />
                                    Category: {museum.category}<br />
                                    City: {museum.city}
                                </div> */}
                            </a>
                        )
                    })
                    : 'loading...'}
                {/* <button onClick={() => this.testForLoggedIn()}>O</button> */}
            </div >
        )
    }
}