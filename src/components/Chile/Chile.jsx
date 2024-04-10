import styles from './Chile.module.css'
import { useRef } from 'react'
//Animation
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Chile({isopen}) {
    const chile = useRef()

    let frameCount = 5,
        urls = new Array(frameCount).fill().map((o, i) => `/chile/chile${(i + 1)}.webp`);
    
    function imageSequence(config) {
        
        let playhead = { frame: 0 },
            canvas = gsap.utils.toArray(config.canvas)[0] || console.warn("canvas not defined"),
            ctx = canvas.getContext("2d"),
            curFrame = -1,
            onUpdate = config.onUpdate,
            images,
            updateImage = function () {
                let frame = Math.round(playhead.frame);
                if (frame !== curFrame) { // only draw if necessary
                    
                    config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
                    curFrame = frame;
                    onUpdate && onUpdate.call(this, frame, images[frame]);
                }
            };
        images = config.urls.map((url, i) => {
            let img = new Image();
            img.src = url;
            i || (img.onload = updateImage);
            //console.log(img)
            return img;
        });
        return gsap.to(playhead, {
            frame: images.length - 1,
            ease: "none",
            onUpdate: updateImage,
            duration: images.length / (config.fps || 30),
            paused: !!config.paused,
            scrollTrigger: config.scrollTrigger
        });
    }

      useGSAP(() => {
        console.log("chile", isopen);
        imageSequence({
            urls,
            canvas: '.chileAnim',
            clear: true, 
            //onUpdate: (index, image) => console.log("drew image index", index, ", image:", image),
            scrollTrigger: {
              start: 'top center',   
              end: 'bottom center',
              trigger: '.chileAnim', 
              scrub: 1             
            }
          });
    }, { scope: chile});

     
    return (
        <div className={styles.chile} ref={chile}>
            <canvas className={`chileAnim ${styles.frames}`} width='460px' height='460px' />
        </div>
    )
}

export default Chile
