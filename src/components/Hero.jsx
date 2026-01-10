import {useEffect, useRef} from "react";

export const Hero = () => {
    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);
    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title"/>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Buy</button>

            <p>From R26 342,89 or R2 191,12/mo for 12 months</p>
        </section>
    )
}
