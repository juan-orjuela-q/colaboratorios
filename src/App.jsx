import { useState } from 'react'
import SectionIntro from './components/SectionIntro/SectionIntro'
import Audio from './components/Audio/Audio'
import SectionAprendizaje from './components/SectionAprendizaje/SectionAprendizaje'
import SectionTaza from './components/SectionTaza/SectionTaza'
import SectionCiencia from './components/SectionCiencia/SectionCiencia'

function App() {
  const [isopen, setIsopen] = useState(false)

  return (
    <>
      <SectionIntro isopen={isopen} setIsopen={setIsopen} />
      {isopen && (
        <>
          <Audio />
          <SectionAprendizaje />
          <SectionTaza />
          <SectionCiencia />
        </>
      )}
      {/* <div className="noise"></div> */}
    </>
  )
}

export default App
