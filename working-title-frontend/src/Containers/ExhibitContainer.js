import React from 'react'
import ExhibitTile from '../Components/ExhibitTile'

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
                {this.state.displayExhibits
                    ? this.state.displayExhibits.map((exhibit, idx) => {
                        return (
                            <a classname="list" href={`http://localhost:3001/exhibits/${exhibit.id}`} key={idx} >
                                <ExhibitTile {...exhibit} />
                            </a>
                        )
                    })
                    : 'loading...'}
            </div >
        )
    }
}