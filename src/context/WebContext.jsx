import { createContext, useContext, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger);


const WebContext = createContext();

function WebProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoID, setVideoID] = useState('');
    

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);
        
    }, [isOpen]);

    return <WebContext.Provider value={{
        isOpen,
        setIsOpen,
        isModalOpen,
        setIsModalOpen,
        videoID,
        setVideoID
    }}>{children}</WebContext.Provider>;
}

function useWeb() {
    const context = useContext(WebContext);
    if (context === undefined) {
        throw new Error('useWeb must be used within a WebProvider');
    }
    return context;
}

export { WebProvider, useWeb };
