import { createContext, useContext, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger);


const WebContext = createContext();

function WebProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoPath, setVideoPath] = useState('');
    

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);
        
    }, [isOpen]);

    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return <WebContext.Provider value={{
        isOpen,
        setIsOpen,
        isModalOpen,
        setIsModalOpen,
        videoPath,
        setVideoPath
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
