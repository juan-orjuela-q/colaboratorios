import { useState } from 'react'
import SectionIntro from './components/SectionIntro/SectionIntro'

function App() {
  const [isopen, setIsopen] = useState(false)

  return (
    <>
      <SectionIntro isopen={isopen} setIsopen={setIsopen} />
      {isopen && (
        <div>
          <h1>Esta es la sección de ejemplo</h1>
        </div>
      )}
    </>
  )
}

export default App
