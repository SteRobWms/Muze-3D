import React from 'react'

export default function Museum(props) {

    return (
        <div>
            <h3>Name: {props.museum.name}</h3>
            <h3>Category: {props.museum.category}</h3>
            <h3>City: {props.museum.city}</h3>
        </div>
    )
}