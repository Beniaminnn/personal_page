import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Asigură-te că ai importat SplitType înainte de acest fișier sau dintr-o sursă globală
const TextEffect = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        // Asigură-te că `SplitType` este definit global
        const SplitType = window.SplitType;

        if (SplitType && textRef.current) {
            // Inițializează SplitType pe elementul de referință `textRef`
            const typeSplit = new SplitType(textRef.current, {
                types: 'lines, words, chars',
                tagName: 'span'
            });

            // Aplică animația GSAP pe fiecare caracter
            gsap.from(textRef.current.querySelectorAll('.char'), {
                opacity: 0.3,
                duration: 0.25,
                ease: 'elastic.inOut',
                stagger: 0.1,
                repeat: -1
            });
        } else {
            console.error("SplitType is not loaded or textRef is null.");
        }
    }, []);

    return <span ref={textRef} animate>{text}</span>;
};

export default TextEffect;
