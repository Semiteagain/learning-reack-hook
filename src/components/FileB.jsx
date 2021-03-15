import React, { useContext } from 'react'
import { LocationContext, MovieNameContext, MusicNameContext } from '../App'


function FileB() {
    const musicName = useContext(MusicNameContext)
    const movieName = useContext(MovieNameContext)
    const location = useContext(LocationContext)
    return (
        <div>
            <h3>I list to {musicName} music when i was in {location} and i also like to watch {movieName} movie  </h3>
        </div>
    )
}

export default FileB
