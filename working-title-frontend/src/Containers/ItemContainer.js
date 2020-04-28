import React, { useState, useEffect } from 'react'
import Item from '../Components/Item'

export default function ItemContainer() {

    const [items, setItems] = useState([])
    const [displayItems, setDisplayItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then(response => response.json())
            .then(items => {
                setItems(items)
                setDisplayItems(items)
            })
    })

    return (
        <div>
            <ul>
                {displayItems
                    ? displayItems.map((item, idx) => <Item key={idx} item={item} />)
                    : 'loading...'}
            </ul>
        </div>
    )
}