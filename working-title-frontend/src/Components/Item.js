import React from 'react'

export default function Item(props) {

    return (
        <div>
            <h3>Name: {props.item.name}</h3>
            <h3>Description: {props.item.description}</h3>
            <h3>Creator/Contributor: {props.item.creator}</h3>
        </div>
    )
}