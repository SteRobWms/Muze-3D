import React, { useState, useEffect } from 'react'
import Museum from '../Components/Museum'
import { Link } from 'react-router-dom'

export default function MuseumContainer() {

    const [museums, setMuseums] = useState([])
    const [displayMuseums, setDisplayMuseums] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/museums')
            .then(response => response.json())
            .then(museums => {
                setMuseums(museums)
                setDisplayMuseums(museums)
            })
    })

    return (
        <div>
            {displayMuseums
                ? displayMuseums.map((museum, idx) => {
                    return (
                        <a style={{ margin: "10px", "borderRadius": "10px", width: "300px", display: "block", color: "black", border: "solid black 1px", backgroundColor: "skyblue" }} className="list" href={`http://localhost:3001/museums/${idx + 1}`}>
                            <div>
                                Name: {museum.name}<br />
                                Category: {museum.category}<br />
                                City: {museum.city}
                            </div>
                        </a>
                    )
                })
                : 'loading...'}
        </div>
    )
}