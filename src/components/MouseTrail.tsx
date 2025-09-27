import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const createTrail = () => {
      setTrail(prevTrail => {
        const newPoint: TrailPoint = {
          x: mouseX,
          y: mouseY,
          id: trailId++
        };

        const updatedTrail = [newPoint, ...prevTrail.slice(0, 4)];
        return updatedTrail;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(createTrail, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="mouse-trail"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            opacity: (trail.length - index) / trail.length * 0.3,
            transform: `scale(${(trail.length - index) / trail.length})`,
          }}
        />
      ))}
    </>
  );
};