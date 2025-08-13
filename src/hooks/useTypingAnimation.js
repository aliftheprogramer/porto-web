import { useState, useEffect } from 'react';

/**
 * Custom hook for typing animation effect
 * @param {string[]} roles - Array of roles to cycle through
 * @param {object} options - Configuration options
 * @returns {object} - Current typing state
 */
export const useTypingAnimation = (roles, options = {}) => {
    const {
        typingSpeed = 100,
        deletingSpeed = 50,
        pauseDuration = 2000,
        pauseBeforeNext = 500
    } = options;

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[currentIndex];
        
        if (isTyping) {
            // Typing forward
            if (charIndex < currentRole.length) {
                const timer = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, typingSpeed + Math.random() * 100);
                
                return () => clearTimeout(timer);
            } else {
                // Pause before deleting
                const timer = setTimeout(() => {
                    setIsTyping(false);
                }, pauseDuration);
                
                return () => clearTimeout(timer);
            }
        } else {
            // Deleting
            if (charIndex > 0) {
                const timer = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, deletingSpeed + Math.random() * 50);
                
                return () => clearTimeout(timer);
            } else {
                // Move to next role
                const timer = setTimeout(() => {
                    setCurrentIndex((currentIndex + 1) % roles.length);
                    setIsTyping(true);
                }, pauseBeforeNext);
                
                return () => clearTimeout(timer);
            }
        }
    }, [charIndex, currentIndex, isTyping, roles, typingSpeed, deletingSpeed, pauseDuration, pauseBeforeNext]);

    return {
        currentText,
        currentIndex,
        isTyping,
        status: isTyping ? 'typing...' : 'deleting...'
    };
};
