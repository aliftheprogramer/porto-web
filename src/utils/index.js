/**
 * Smooth scroll to element with offset for fixed header
 * @param {string} elementId - Target element ID 
 * @param {number} offset - Offset from top in pixels
 */
export const smoothScrollTo = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};

/**
 * Format email for mailto link
 * @param {string} email - Email address
 * @param {string} subject - Email subject
 * @param {string} body - Email body
 * @returns {string} Formatted mailto URL
 */
export const formatMailtoLink = (email, subject = "", body = "") => {
    const params = new URLSearchParams();
    if (subject) params.append('subject', subject);
    if (body) params.append('body', body);
    
    const paramString = params.toString();
    return `mailto:${email}${paramString ? '?' + paramString : ''}`;
};

/**
 * Debounce function to limit rapid function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function to limit function calls to once per interval
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Generate random delay for typing animation
 * @param {number} min - Minimum delay
 * @param {number} max - Maximum delay  
 * @returns {number} Random delay in milliseconds
 */
export const getRandomDelay = (min = 50, max = 150) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{3})$/);
    if (match) {
        return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
    }
    return phone;
};

/**
 * Get intersection observer options
 * @param {number} threshold - Intersection threshold
 * @param {string} rootMargin - Root margin for observation
 * @returns {Object} Observer options
 */
export const getObserverOptions = (threshold = 0.1, rootMargin = '0px') => {
    return {
        root: null,
        rootMargin,
        threshold,
    };
};

/**
 * Filter projects by category
 * @param {Array} projects - Projects array
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered projects
 */
export const filterProjectsByCategory = (projects, category) => {
    if (category === 'all') {
        return projects;
    }
    return projects.filter(project => project.category === category);
};

/**
 * Get scroll progress as percentage
 * @returns {number} Scroll progress (0-100)
 */
export const getScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (winScroll / height) * 100;
};

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
