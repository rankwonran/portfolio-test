import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 800;
    const speed = 0.5;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * w,
      });
    }

    const draw = () => {
      ctx.fillStyle = '#0D1117';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#ffffff';
      
      stars.forEach((star) => {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = w;
          star.x = Math.random() * w;
          star.y = Math.random() * h;
        }

        const x = (star.x - w / 2) * (w / star.z) + w / 2;
        const y = (star.y - h / 2) * (w / star.z) + h / 2;
        const size = (1 - star.z / w) * 2;

        if (x >= 0 && x < w && y >= 0 && y < h) {
          ctx.globalAlpha = 1 - star.z / w;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default StarField;
