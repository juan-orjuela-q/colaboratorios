import { WebProvider } from './context/WebContext'
import Landing from './Landing'

function App() {

   
  return (
    <>
      <WebProvider>
        <Landing />
      </WebProvider>
    </>
  )
}

export default App
