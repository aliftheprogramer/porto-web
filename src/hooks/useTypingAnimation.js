import { useState, useEffect, useCallback } from 'react';

/**
 * Optimized typing animation hook
 * @param {string[]} roles - Array of roles to cycle through
 * @param {object} options - Configuration options
 * @returns {object} - Current typing state
 */
export const useTypingAnimation = (roles, options = {}) => {
    const {
        typingSpeed = 150,
        deletingSpeed = 100,
        pauseDuration = 1500,
        pauseBeforeNext = 300
    } = options;

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    const updateText = useCallback(() => {
        const currentRole = roles[currentIndex];
        
        if (isTyping) {
            if (charIndex < currentRole.length) {
                setCurrentText(currentRole.slice(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), pauseDuration);
            }
        } else {
            if (charIndex > 0) {
                setCurrentText(currentRole.slice(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTimeout(() => {
                    setCurrentIndex((currentIndex + 1) % roles.length);
                    setIsTyping(true);
                }, pauseBeforeNext);
            }
        }
    }, [charIndex, currentIndex, isTyping, roles, typingSpeed, deletingSpeed, pauseDuration, pauseBeforeNext]);

    useEffect(() => {
        const speed = isTyping ? typingSpeed : deletingSpeed;
        const timer = setTimeout(updateText, speed);
        return () => clearTimeout(timer);
    }, [updateText, isTyping, typingSpeed, deletingSpeed]);

    return {
        currentText,
        currentIndex,
        isTyping,
        status: isTyping ? 'typing...' : 'deleting...'
    };
};
