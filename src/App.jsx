import { useState } from 'react'
import SectionIntro from './components/SectionIntro/SectionIntro'
import Audio from './components/Audio/Audio'
import SectionAprendizaje from './components/SectionAprendizaje/SectionAprendizaje'

function App() {
  const [isopen, setIsopen] = useState(false)

  return (
    <>
      <SectionIntro isopen={isopen} setIsopen={setIsopen} />
      {isopen && (
        <>
        <Audio />
        <SectionAprendizaje />
        </>
      )}
    </>
  )
}

export default App
