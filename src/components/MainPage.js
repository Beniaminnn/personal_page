// src/components/MainPage.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const MainPage = () => {
    const textRef = useRef(null);

    useEffect(() => {
        // Blochează scroll-ul
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                startLoopAnimation();
                // Deblochează scroll-ul după finalizarea animației
                document.body.style.overflow = 'auto';
            }
        });

        // Animația pentru a muta textul în sus o singură dată
        tl.to(textRef.current, {
            y: -150, // Mută textul cu 150px în sus
            duration: 1,
            ease: 'power1.inOut',
        });

        return () => {
            document.body.style.overflow = 'auto'; // Deblochează scroll-ul la demontare
        };
    }, []);

    // Funcție pentru a începe animația de letter spacing și zoom in/out
    const startLoopAnimation = () => {
        gsap.to(textRef.current, {
            scale: 1.05, // Zoom in
            letterSpacing: '3px', // Distanță între litere
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1, // Repetă animația la infinit
            yoyo: true, // Inversarea animației la final
        });
    };

    return (
        <div style={{
            position: 'sticky',
            top: '25%', // Plasează textul mai sus
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#D8BFD8',
            fontSize: '20px',
            zIndex: 10,
            textAlign: 'center',
            fontFamily: 'Inversionz',
        }}>
            <h1 ref={textRef}>personal page</h1>
        </div>
    );
};

export default MainPage;
