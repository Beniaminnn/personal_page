// src/components/BaseImage.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import base from '../assets/images/base.png';

const BaseImage = () => {
    const baseImageRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (animationFrameId.current) return;

            animationFrameId.current = requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // Mișcă imaginea bazată pe scroll
                gsap.to(baseImageRef.current, {
                    y: scrollY * 0.3, // Ajustează acest număr pentru a schimba viteza
                    duration: 0.3,
                    ease: "power1.out"
                });

                animationFrameId.current = null; // Resetează ID-ul animației
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <img
            src={base}
            alt="base"
            ref={baseImageRef}
            style={{
                position: 'absolute',
                top: '270%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                height: '750%',
                width: '75%',
            }}
        />
    );
};

export default BaseImage;
