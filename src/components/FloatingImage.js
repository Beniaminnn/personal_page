// src/components/FloatingImage.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingImage = ({ src, alt, delay }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const float = () => {
            // Animatează imaginea de plutire
            gsap.fromTo(imageRef.current,
                {
                    y: 0, // Poziția de start
                    rotation: 0, // Rotația inițială
                    scale: 1, // Scara inițială
                },
                {
                    y: Math.random() * 20 - 10, // Mișcă între -10 și +10 pixeli pe axa Y
                    rotation: Math.random() * 0.5 - 3, // Rotează între -5 și +5 grade
                    scale: 1 + Math.random() * 0.1, // Zoom între 1 și 1.2 (20%)
                    duration: 2 + Math.random() * 1, // Durata între 2 și 4 secunde
                    ease: "sine.inOut", // Easing
                    repeat: -1, // Repetă animația infinit
                    yoyo: true, // Inversarea animației la final
                    delay: delay, // Adaugă un delay pentru a face animația individuală
                });
        };

        float(); // Apelăm funcția de animare

        return () => {
            // Curățăm animația dacă componentul se demontează
            gsap.killTweensOf(imageRef.current);
        };
    }, [delay]);

    return (
        <img
            src={src}
            alt={alt}
            ref={imageRef}
            style={{
                position: 'absolute',
                zIndex: 5, // Asigură-te că imaginea este deasupra altor elemente
            }}
        />
    );
};

export default FloatingImage;
