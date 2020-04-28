import React, { useState, useEffect } from 'react'
import Exhibit from '../Components/Exhibit'

export default function ExhibitContainer() {

    const [exhibits, setExhibits] = useState([])
    const [displayExhibits, setDisplayExhibits] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/exhibits')
            .then(response => response.json())
            .then(exhibits => {
                setExhibits(exhibits)
                setDisplayExhibits(exhibits)
            })
    })

    return (
        <div>
            <ul>
                {displayExhibits
                    ? displayExhibits.map((exhibit, idx) => <Exhibit key={idx} exhibit={exhibit} />)
                    : 'loading...'}
            </ul>
        </div>
    )
}