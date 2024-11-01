// src/components/MainPage.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingText  from "./FloatingText";
import TextEffect from "./TextEffect";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
    const textRef = useRef(null);
    const pageRef = useRef(null); // Referință pentru efectul de fade-in al întregii pagini
    const sectionsRef = useRef([]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Fade-in pentru întreaga pagină la început
        gsap.fromTo(pageRef.current,
            { opacity: 0 }, // start opacity
            { opacity: 1, duration: 1.5, ease: 'power2.out', onComplete: () => {
                    document.body.style.overflow = 'auto'; // Unlock scroll after fade-in
                }}
        );

        // Animația pentru titlul "personal page"
        gsap.to(textRef.current, {
            y: -50,
            duration: 1,
            ease: 'power1.inOut',
        });

        // Animația de loop pentru titlu
        gsap.to(textRef.current, {
            scale: 1.1,
            letterSpacing: '3px',
            duration: 1.5,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
        });

        // Animațiile pentru secțiuni cu efect de scroll
        sectionsRef.current.forEach((section, index) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    delay: index * 0.3,
                }
            );
        });

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div ref={pageRef} style={{
            position: 'relative',
            minHeight: '100vh',
            color: 'blueviolet',
            fontFamily: 'Inversionz',
            padding: '50px 20px',
        }}>
            <h1 ref={textRef} style={{ textAlign: 'center', fontSize: '40px', marginBottom: '40px', }}>
                personal page
            </h1>

            {/* Section 1 */}
            <section ref={(el) => sectionsRef.current[0] = el} style={{
                backgroundColor: '#1a0d3d',
                color: '#FFF',
                padding: '20px',
                margin: '20px 0',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
                <h2 style={{ fontFamily: 'Space Age' }}><FloatingText text="ABOUT ME" delay={0.15}/></h2>
                <p style={{ fontFamily: 'Nasalization' }}><TextEffect text="is a section where you can write about yourself, your background, and your interests."/></p>
            </section>

            {/* Section 2 */}
            <section ref={(el) => sectionsRef.current[1] = el} style={{
                backgroundColor: '#26264f',
                color: '#FFF',
                padding: '20px',
                margin: '20px 0',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
                <h2 style={{ fontFamily: 'Space Age' }}><FloatingText text="MY PROJECTS" delay={0.2}/></h2>
                <p style={{ fontFamily: 'Nasalization' }}><TextEffect text={"showcase of my recent projects and achievements, including links to GitHub or live demos."}/> </p>
            </section>

            {/* Section 3 */}
            <section ref={(el) => sectionsRef.current[2] = el} style={{
                backgroundColor: '#333370',
                color: '#FFF',
                padding: '20px',
                margin: '20px 0',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
                <h2 style={{ fontFamily: 'Space Age' }}><FloatingText text="CONTACT" delay={0.25}/></h2>
                <p style={{ fontFamily: 'Nasalization' }}><TextEffect text="Feel free to in touch with me via social media, email, or LinkedIn. Looking forward to connecting!"/></p>
            </section>
        </div>
    );
};

export default MainPage;
