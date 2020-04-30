import React from 'react'
import Exhibit from '../Components/Exhibit'

export default class ExhibitContainer extends React.Component {

    state = {
        exhibits: [],
        displayExhibits: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/exhibits')
            .then(response => response.json())
            .then(exhibits => {
                this.setState({
                    exhibits,
                    displayExhibits: exhibits
                })
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.displayExhibits
                        ? this.state.displayExhibits.map((exhibit, idx) => <Exhibit key={idx} exhibit={exhibit} />)
                        : 'loading...'}
                </ul>
            </div >
        )
    }
}