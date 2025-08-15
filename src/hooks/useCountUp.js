import { useState, useEffect } from 'react';

/**
 * Optimized count up animation hook
 * @param {number} end - Target number to count to  
 * @param {number} duration - Animation duration in milliseconds
 * @returns {number} - Current count value
 */
export const useCountUp = (end, duration = 1500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Simple interval-based approach for better performance
        const steps = 20;
        const increment = end / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
                setCount(Math.floor(increment * currentStep));
            } else {
                setCount(end);
                clearInterval(interval);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, [end, duration]);

    return count;
};
