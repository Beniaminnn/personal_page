// src/components/FloatingText.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingText = ({ text, delay }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const float = () => {
            // Animatează textul de plutire
            gsap.fromTo(textRef.current,
                {
                    y: 0, // Poziția de start
                    rotation: 0, // Rotația inițială
                    scale: 1, // Scara inițială
                    opacity: 1, // Opacitate inițială
                },
                {
                    y: Math.random() * 20 - 10, // Mișcă între -10 și +10 pixeli pe axa Y
                    rotation: Math.random() * 1, // Rotează între -2.5 și +2.5 grade
                    scale: 1 + Math.random() * 0.3, // Zoom între 1 și 1.1 (10%)
                    duration: 2 + Math.random() * 0.5, // Durata între 2 și 4 secunde
                    ease: "sine.inOut", // Easing
                    repeat: -1, // Repetă animația infinit
                    yoyo: true, // Inversarea animației la final
                    delay: delay, // Adaugă un delay pentru a face animația individuală
                });
        };

        float(); // Apelăm funcția de animare

        return () => {
            // Curățăm animația dacă componentul se demontează
            gsap.killTweensOf(textRef.current);
        };
    }, [delay]);

    return (
        <span
            ref={textRef}
            style={{
                position: 'relative',
                zIndex: 5, // Asigură-te că textul este deasupra altor elemente
                display: 'inline-block', // Permite animații corecte
            }}
        >
            {text}
        </span>
    );
};

export default FloatingText;
