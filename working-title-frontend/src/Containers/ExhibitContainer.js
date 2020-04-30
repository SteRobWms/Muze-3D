import React from 'react'
import Exhibit from '../Components/Exhibit'

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
                <ul>
                    {this.state.displayExhibits
                        //replace <Exhibit> with <ExhibitThumb>
                        ? this.state.displayExhibits.map((exhibit, idx) => <Exhibit key={idx} exhibit={exhibit} />)
                        : 'loading...'}
                </ul>
            </div >
        )
    }
}