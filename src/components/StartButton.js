// src/components/StartButton.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StartButton = ({ onClick }) => { // Acceptă prop-ul onClick
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(buttonRef.current,
            {
                opacity: 1,
                scale: 1,
            },
            {
                opacity: 0,
                scale: 1.1,
                duration: 1,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
            }
        );
    }, []);

    return (
        <button
            ref={buttonRef}
            onClick={onClick} // Adaugă funcția de click
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px 40px',
                fontSize: '24px',
                color: '#fff',
                background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                zIndex: 20,
                textTransform: 'uppercase',
                fontFamily: 'Planet Kosmos, sans-serif',
            }}
        >
            Start
        </button>
    );
};

export default StartButton;
