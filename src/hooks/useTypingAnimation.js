import { useState, useEffect, useCallback } from 'react';

/**
 * Optimized typing animation hook
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
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!roles || roles.length === 0) return;

        const currentRole = roles[currentIndex];
        let timeoutId;

        if (isPaused) {
            // Wait before starting next cycle
            timeoutId = setTimeout(() => {
                setIsPaused(false);
                setIsTyping(true);
                setCurrentText("");
            }, pauseBeforeNext);
        } else if (isTyping) {
            // Typing phase
            if (currentText.length < currentRole.length) {
                timeoutId = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                }, typingSpeed);
            } else {
                // Finished typing, pause before deleting
                timeoutId = setTimeout(() => {
                    setIsTyping(false);
                }, pauseDuration);
            }
        } else {
            // Deleting phase
            if (currentText.length > 0) {
                timeoutId = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1));
                }, deletingSpeed);
            } else {
                // Finished deleting, move to next role
                setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setIsPaused(true);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [currentText, currentIndex, isTyping, isPaused, roles, typingSpeed, deletingSpeed, pauseDuration, pauseBeforeNext]);

    return {
        currentText,
        currentIndex,
        isTyping,
        isPaused,
        status: isPaused ? 'preparing...' : isTyping ? 'typing...' : 'deleting...'
    };
};
