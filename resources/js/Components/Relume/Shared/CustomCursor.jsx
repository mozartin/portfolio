"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has mouse
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
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

