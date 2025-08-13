import { useState, useEffect } from 'react';

/**
 * Custom hook for counting animation
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @returns {number} - Current count value
 */
export const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration]);

    return count;
};
