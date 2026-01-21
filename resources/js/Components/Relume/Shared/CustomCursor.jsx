"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  const trailsRef = useRef([]);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device has mouse
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      
      // Add twinkling stars on movement
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 20 + 5;
        trailsRef.current.push({
          x: e.clientX + Math.cos(angle) * distance,
          y: e.clientY + Math.sin(angle) * distance,
          opacity: 0.9,
          size: Math.random() * 2.5 + 1,
          twinkle: Math.random() * Math.PI * 2,
        });
      }

      // Limit trail length
      if (trailsRef.current.length > 60) {
        trailsRef.current.splice(0, 2);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(isClickable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Canvas animation for trails
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add idle twinkling stars around cursor when stationary
      if (mousePosRef.current.x > 0 && Math.random() > 0.92) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 30 + 15;
        trailsRef.current.push({
          x: mousePosRef.current.x + Math.cos(angle) * distance,
          y: mousePosRef.current.y + Math.sin(angle) * distance,
          opacity: 0.8,
          size: Math.random() * 2 + 1,
          twinkle: Math.random() * Math.PI * 2,
        });
      }

      // Update and draw all stars with twinkle effect
      trailsRef.current = trailsRef.current.filter(star => {
        star.twinkle += 0.12;
        star.opacity -= 0.02;
        
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 154, 194, ${twinkleOpacity})`;
        ctx.fill();

        return star.opacity > 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Main cursor - outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? 50 : 30,
          height: isHovering ? 50 : 30,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s, height 0.15s, opacity 0.15s',
          border: '2px solid #F3F0F6',
          boxShadow: '0 0 0 1px #372C43',
        }}
      />
      
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s, height 0.15s, opacity 0.15s',
          backgroundColor: '#F3F0F6',
          boxShadow: '0 0 0 1px #372C43',
        }}
      />

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

