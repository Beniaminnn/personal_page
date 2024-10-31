import React, { useState, useEffect } from 'react';
import './App.css';
import planets from './assets/images/planets.png';
import dots from './assets/images/dots.png';
import holes from './assets/images/holes.png';
import meteors from './assets/images/meteors.png'

import FloatingImage from "./components/FloatingImage";
import StartButton from "./components/StartButton";
import LandingPage from "./components/LandingPage";

const App = () => {
    const [started, setStarted] = useState(false);

    const handleStart = () => {
        setStarted(true);
    };

    // Blocăm scroll-ul când componenta se montează și îl deblocăm la demontare
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Blochează scroll-ul
        return () => {
            document.body.style.overflow = 'auto'; // Deblochează scroll-ul la demontare
        };
    }, []);

    return (
        <div className="App" style={{ position: 'relative', height: '100vh' }}>
            <div className={"image-container"}>
                {!started ? (
                    <>
                        <FloatingImage src={dots} alt="Dots" delay={0} />
                        <FloatingImage src={holes} alt="Holes" delay={0.5} />
                        <FloatingImage src={meteors} alt="Meteors" delay={1} />
                        <FloatingImage src={planets} alt="Planets" delay={1.5} />
                        <StartButton onClick={handleStart} />
                    </>
                ) : (
                    <LandingPage />
                )}
            </div>
        </div>
    );
};

export default App;
