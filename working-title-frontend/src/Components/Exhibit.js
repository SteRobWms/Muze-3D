import React from 'react'

export default function Exhibit(props) {

    return (
        <div>
            <h3>Name: {props.exhibit.name}</h3>
            <h3>Description: {props.exhibit.description}</h3>
            {/* <h3>Creator: {props.exhibit.creator}</h3> */}
        </div>
    )
}