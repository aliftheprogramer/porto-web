import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const updateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      requestAnimationFrame(updateFollower);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .hover-cursor');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start follower animation
    updateFollower();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] w-3 h-3 bg-white rounded-full mix-blend-difference transition-all duration-150 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />
      
      {/* Cursor follower */}
      <div
        ref={followerRef}
        className={`fixed pointer-events-none z-[9998] w-10 h-10 border-2 border-cyan-400/50 rounded-full transition-all duration-300 ${
          isHovering ? 'scale-150 border-cyan-400' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{ 
          willChange: 'transform',
          backdropFilter: 'blur(2px)',
          background: isHovering ? 'rgba(6, 182, 212, 0.1)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
