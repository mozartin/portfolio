"use client";

import { Button } from "../../Shared/Button";
import React, { useRef, useEffect, useState } from "react";

// Star animation component
function StarField({ mousePos, isHovering }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize stars
    const createStar = (x, y, isNew = false) => ({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      opacity: isNew ? 0.6 : Math.random() * 0.3 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      life: isNew ? 50 : Infinity,
      twinkle: Math.random() * Math.PI * 2,
    });
    
    // Create initial stars
    for (let i = 0; i < 25; i++) {
      starsRef.current.push(createStar());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new stars near cursor when hovering (less frequently)
      if (isHovering && Math.random() > 0.85) {
        const offsetX = (Math.random() - 0.5) * 120;
        const offsetY = (Math.random() - 0.5) * 120;
        starsRef.current.push(createStar(mousePos.x + offsetX, mousePos.y + offsetY, true));
      }
      
      starsRef.current = starsRef.current.filter(star => {
        // Magnetic attraction to cursor
        if (isHovering) {
          const dx = mousePos.x - star.x;
          const dy = mousePos.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          
          if (distance < maxDistance && distance > 5) {
            const force = (1 - distance / maxDistance) * 0.8;
            star.speedX += (dx / distance) * force;
            star.speedY += (dy / distance) * force;
          }
        }
        
        // Apply friction to slow down
        star.speedX *= 0.98;
        star.speedY *= 0.98;
        
        // Update position
        star.x += star.speedX;
        star.y += star.speedY;
        star.twinkle += 0.05;
        
        // Decrease life for cursor-spawned stars
        if (star.life !== Infinity) {
          star.life--;
          star.opacity = Math.min(1, star.life / 30);
        }
        
        // Draw star
        const twinkleOpacity = star.opacity * (0.4 + 0.6 * Math.sin(star.twinkle));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity})`;
        ctx.fill();
        
        // Draw subtle glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 154, 194, ${twinkleOpacity * 0.15})`;
        ctx.fill();
        
        // Keep star if alive and on screen
        return star.life > 0 && star.x > -10 && star.x < canvas.width + 10 && star.y > -10 && star.y < canvas.height + 10;
      });
      
      // Maintain minimum star count
      while (starsRef.current.length < 25) {
        starsRef.current.push(createStar());
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos, isHovering]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// Список ваших картинок (обновленный)
const galleryImages = [
  "/images/gallery/alex-bertha-Jyg7xHRmXiU-unsplash-transformed.jpeg",
  "/images/gallery/alex-perri-bmM_IdLd1SA-unsplash-transformed.jpeg",
  "/images/gallery/bady-abbas-chrXKN7J8ic-unsplash-transformed.jpeg",
  "/images/gallery/engin-akyurt-ZbzYDboN7fg-unsplash-transformed.jpeg",
  "/images/gallery/kaylee-garrett-GaprWyIw66o-unsplash-transformed.jpeg",
  "/images/gallery/mediamodifier-W7AyAs7azHc-unsplash-transformed.jpeg",
  "/images/gallery/paje-victoria-ohhEOp05h4g-unsplash-transformed.jpeg",
];

// Функция для дублирования массива, чтобы заполнить marquee
const fillMarquee = (images, minCount = 12) => {
  let result = [...images];
  while (result.length < minCount) {
    result = [...result, ...images];
  }
  return result;
};

const topMarqueeImages = fillMarquee(galleryImages, 12);
const bottomMarqueeImages = fillMarquee([...galleryImages].reverse(), 12);

export function Header78() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const renderImage = (src, index) => (
    <div key={index} className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
      <img
        className="absolute inset-0 size-full object-cover"
        src={src}
        alt={`Gallery image ${index + 1}`}
      />
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="relume" 
      className="relative px-[5%] py-16 md:py-24 lg:py-22 bg-purple text-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <StarField mousePos={mousePos} isHovering={isHovering} />
      <div className="container flex flex-col items-center relative z-10">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
            Calm, structured websites for wellness, beauty & sport businesses
          </h1>
          <p className="md:text-md font-regular italic">
            I design and build clear, fast, and maintainable websites that help
            small brands look professional and grow — without unnecessary
            complexity.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button href="/contact">Work with me</Button>
            <Button variant="secondary" href="/about">See my approach</Button>
          </div>
        </div>
        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            {/* Top Marquee */}
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                {topMarqueeImages.map((src, i) => renderImage(src, i))}
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                {topMarqueeImages.map((src, i) => renderImage(src, `dup1-${i}`))}
              </div>
            </div>
            
            <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                {bottomMarqueeImages.map((src, i) => renderImage(src, i))}
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                {bottomMarqueeImages.map((src, i) => renderImage(src, `dup2-${i}`))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
