import { useEffect, useRef } from 'react';
import './BackgroundAnimation.css';

function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hearts = [];
        const heartCount = 15;

        // Heart shape path
        const drawHeart = (ctx, x, y, size) => {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.bezierCurveTo(x, y - size / 4, x - size / 2, y - size / 2, x - size / 2, y);
            ctx.bezierCurveTo(x - size / 2, y + size / 4, x, y + size / 2, x, y + size);
            ctx.bezierCurveTo(x, y + size / 2, x + size / 2, y + size / 4, x + size / 2, y);
            ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y - size / 4, x, y);
            ctx.closePath();
        };

        // Create hearts
        for (let i = 0; i < heartCount; i++) {
            hearts.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 20 + 10,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02
            });
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            hearts.forEach(heart => {
                ctx.save();
                ctx.translate(heart.x, heart.y);
                ctx.rotate(heart.rotation);
                ctx.fillStyle = `rgba(255, 107, 157, ${heart.opacity})`;

                drawHeart(ctx, 0, 0, heart.size);
                ctx.fill();
                ctx.restore();

                // Update position
                heart.x += heart.speedX;
                heart.y += heart.speedY;
                heart.rotation += heart.rotationSpeed;

                // Wrap around screen
                if (heart.x < -50) heart.x = canvas.width + 50;
                if (heart.x > canvas.width + 50) heart.x = -50;
                if (heart.y < -50) heart.y = canvas.height + 50;
                if (heart.y > canvas.height + 50) heart.y = -50;
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="background-animation">
            <canvas ref={canvasRef} />
        </div>
    );
}

export default BackgroundAnimation;
