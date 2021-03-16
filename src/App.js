import React from 'react'
import FileA from './components/FileA'
import ReducerUse from './components/ReducerUse'


export const MusicNameContext = React.createContext()
export const MovieNameContext = React.createContext()
export const LocationContext = React.createContext()
function App() {
  return (
    <div>
      <MusicNameContext.Provider value='2face idibia'>
        <MovieNameContext.Provider value='Kia and pawpaw'>
          <LocationContext.Provider value='Nigeria'>
          <FileA />
        
        
          </LocationContext.Provider>
        </MovieNameContext.Provider>
     </MusicNameContext.Provider>

    <ReducerUse />

    </div>
  )
}

export default App
