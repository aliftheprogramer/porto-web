import { useState, useEffect } from 'react';

/**
 * Custom hook for intersection observer
 * @param {number} threshold - Threshold for intersection
 * @param {string} targetId - ID of element to observe
 * @returns {boolean} - Whether element is visible
 */
export const useIntersectionObserver = (threshold = 0.1, targetId = null) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        const element = targetId ? document.getElementById(targetId) : null;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, targetId]);

    return isVisible;
};
