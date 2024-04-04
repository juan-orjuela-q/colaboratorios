import { useState } from 'react'
import SectionIntro from './components/SectionIntro/SectionIntro'
import Audio from './components/Audio/Audio'

function App() {
  const [isopen, setIsopen] = useState(false)

  return (
    <>
      <SectionIntro isopen={isopen} setIsopen={setIsopen} />
      {isopen && (
        <>
        <div>
          <h1>Esta es la sección de ejemplo</h1>
        </div>
        <Audio />
        </>
      )}
    </>
  )
}

export default App
