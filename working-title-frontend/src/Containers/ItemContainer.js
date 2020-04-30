import React from 'react'
import Item from '../Components/Item'

export default class ItemContainer extends React.Component {

    state = {
        items: [],
        displayItems: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/items')
            .then(response => response.json())
            .then(items => {
                this.setState({
                    items,
                    displayItems: items
                })
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.displayItems
                        ? this.state.displayItems.map((item, idx) => <Item key={idx} item={item} />)
                        : 'loading...'}
                </ul>
            </div>
        )
    }
}