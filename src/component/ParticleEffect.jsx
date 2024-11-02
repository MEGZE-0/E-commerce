import React, { useEffect, useRef } from 'react';

const ParticleEffect = ({ isHovered }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let particles = [];
        const particleCount = 100;
        const colors = ['#ff0000', '#00ff00', '#0000ff'];

        const createParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 5 + 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    velocityX: (Math.random() - 0.5) * 2,
                    velocityY: (Math.random() - 0.5) * 2,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                particle.x += particle.velocityX;
                particle.y += particle.velocityY;

                if (particle.x > canvas.width || particle.x < 0) particle.velocityX *= -1;
                if (particle.y > canvas.height || particle.y < 0) particle.velocityY *= -1;
            });
        };

        const animate = () => {
            if (isHovered) {
                drawParticles();
                requestAnimationFrame(animate);
            }
        };

        if (isHovered) {
            createParticles();
            animate();
        }

        return () => {
            particles = [];
        };
    }, [isHovered]);

    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
            width={300} 
            height={400} 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none', 
                zIndex: 1, 
                opacity: isHovered ? 1 : 0, 
                transition: 'opacity 0.3s ease', 
            }}
        />
    );
};

export default ParticleEffect;
