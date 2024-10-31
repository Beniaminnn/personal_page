// src/components/LandingPage.js

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import planets from '../assets/images/planets.png';
import dots from '../assets/images/dots.png';
import holes from '../assets/images/holes.png';
import meteors from '../assets/images/meteors.png';
import MainPage from './MainPage'; // Importăm MainPage

const LandingPage = () => {
    const planetsRef = useRef(null);
    const dotsRef = useRef(null);
    const holesRef = useRef(null);
    const meteorsRef = useRef(null);
    const [showMainPage, setShowMainPage] = useState(false);

    useEffect(() => {
        const timeline = gsap.timeline({
            onComplete: () => setShowMainPage(true) // Afișăm MainPage la final
        });

        // Animațiile pentru fiecare imagine cu efect de zoom-in
        timeline.fromTo(planetsRef.current, { scale: 1 }, { scale: 2, duration: 4, ease: 'power2.out' })
            .fromTo(dotsRef.current, { scale: 1 }, { scale: 3, duration: 4, ease: 'power2.out' }, 0)
            .fromTo(holesRef.current, { scale: 1 }, { scale: 2, duration: 4, ease: 'power2.out' }, 0)
            .fromTo(meteorsRef.current, { scale: 1 }, { scale: 2, duration: 4, ease: 'power2.out' }, 0);

    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'linear-gradient(90deg, rgba(37,8,107,1) 0%, rgba(77,1,163,1) 25%, rgba(82,6,143,1) 50%, rgba(41,9,121,1) 75%, rgba(0,0,0,1) 100%)' }}>
            <img
                src={planets}
                alt="Planets"
                ref={planetsRef}
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1)',
                    zIndex: 5,
                }}
            />
            <img
                src={dots}
                alt="Dots"
                ref={dotsRef}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '30%',
                    transform: 'translate(-50%, -50%) scale(1)',
                    zIndex: 4,
                }}
            />
            <img
                src={holes}
                alt="Holes"
                ref={holesRef}
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1)',
                    zIndex: 3,
                }}
            />
            <img
                src={meteors}
                alt="Meteors"
                ref={meteorsRef}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '80%',
                    transform: 'translate(-50%, -50%) scale(1)',
                    zIndex: 2,
                }}
            />

            {showMainPage && <MainPage />} {/* Afișează MainPage după finalizarea animației */}
        </div>
    );
};

export default LandingPage;
