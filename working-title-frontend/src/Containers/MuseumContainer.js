import React, { useState, useEffect } from 'react'
import Museum from '../Components/Museum'

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
            <ul>
                {displayMuseums
                    ? displayMuseums.map((museum, idx) => <Museum key={idx} museum={museum} />)
                    : 'loading...'}
            </ul>
        </div>
    )
}