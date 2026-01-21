"use client";

import { Button } from "../../Shared/Button";
import React, { useRef, useEffect } from "react";

// Simple twinkling stars - no cursor interaction
function StarField() {
  const canvasRef = useRef(null);
  
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
    
    // Create stars once
    const stars = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
    }));
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.twinkle += star.twinkleSpeed;
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
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
      id="relume" 
      className="relative px-[5%] py-16 md:py-24 lg:py-22 bg-purple text-white overflow-hidden"
    >
      <StarField />
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
