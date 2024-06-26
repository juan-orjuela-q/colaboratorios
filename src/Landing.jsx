import SectionIntro from './components/SectionIntro/SectionIntro'
import Audio from './components/Audio/Audio'
import SectionAprendizaje from './components/SectionAprendizaje/SectionAprendizaje'
import SectionTaza from './components/SectionTaza/SectionTaza'
import SectionCiencia from './components/SectionCiencia/SectionCiencia'
import SectionExplora from './components/SectionExplora/SectionExplora'
import { useWeb } from './context/WebContext'
import Modal from './components/Modal/Modal'

function Landing() {

    const {isOpen, isModalOpen} = useWeb()
    
    return (
        <>
            <SectionIntro />
            {isOpen && (
                <>
                    <Audio />
                    <SectionAprendizaje />
                    <SectionTaza />
                    <SectionCiencia />
                    <SectionExplora />
                </>
            )}
            {isModalOpen && <Modal />}           
        </>
    )
}

export default Landing
