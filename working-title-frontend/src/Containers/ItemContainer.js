import React from 'react'
import Item from '../Components/Item'

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
                <ul>
                    {this.state.displayItems
                        // Replace Item with ItemThumb
                        ? this.state.displayItems.map((item, idx) => <Item key={idx} item={item} />)
                        : 'loading...'}
                </ul>
            </div>
        )
    }
}