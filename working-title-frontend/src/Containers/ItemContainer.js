import React from 'react'
import ItemTile from '../Components/ItemTile'

export default class ItemContainer extends React.Component {

    state = {
    }

    getItems = () => {
        fetch('http://localhost:3000/items')
            .then(response => response.json())
            .then(items => {
                this.setState({
                    items,
                    displayItems: items
                })
            })
    }

    componentDidMount() {
        this.props.loggedIn(this.props.history)
        this.getItems()
    }

    render() {
        return (
            <div>
                {this.state.displayItems
                    ? this.state.displayItems.map((item, idx) => {
                        return (
                            <a className="list" href={`http://localhost:3001/items/${item.id}`} key={idx}>
                                <ItemTile {...item} />
                            </a>
                        )
                    })
                    : 'loading...'}
            </div>
        )
    }
}