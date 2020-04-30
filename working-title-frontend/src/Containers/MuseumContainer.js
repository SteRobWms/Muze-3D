import React from 'react'
// import Museum from '../Components/Museum'

export default class MuseumContainer extends React.Component {

    state = {
        museums: [],
        displayMuseums: []
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/museums')
    //         .then(response => response.json())
    //         .then(museums => {
    //             this.setState({
    //                 museums,
    //                 displayMuseums: museums
    //             })
    //         })
    // }

    testForLoggedIn = () => {
        fetch('http://localhost:3000/museums')
            .then(response => response.json())
            .then(console.log)
    }

    render() {
        return (
            <div>
                {this.state.displayMuseums
                    ? this.state.displayMuseums.map((museum) => {
                        return (
                            <a style={{ margin: "10px", "borderRadius": "10px", width: "300px", display: "block", color: "black", border: "solid black 1px", backgroundColor: "skyblue" }} className="list" href={`http://localhost:3001/museums/${museum.id}`}>
                                <div>
                                    Name: {museum.name}<br />
                                    Category: {museum.category}<br />
                                    City: {museum.city}
                                </div>
                            </a>
                        )
                    })
                    : 'loading...'}
                <button onClick={() => this.testForLoggedIn()}>O</button>
            </div >
        )
    }
}