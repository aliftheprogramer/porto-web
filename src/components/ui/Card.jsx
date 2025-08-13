import React from 'react';

/**
 * Reusable Card Component
 * @param {Object} props - Card properties
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover effects
 * @param {boolean} props.glass - Enable glassmorphism effect
 * @param {string} props.padding - Padding size
 * @returns {JSX.Element} Card component
 */
const Card = ({
    children,
    className = '',
    hover = true,
    glass = false,
    padding = 'md',
    ...props
}) => {
    const baseClasses = 'rounded-xl border transition-all duration-300';
    
    const glassClasses = glass 
        ? 'backdrop-blur-md bg-white/10 border-white/20 shadow-xl'
        : 'bg-gray-800 border-gray-700';
        
    const hoverClasses = hover 
        ? 'hover:scale-105 hover:shadow-2xl hover:border-cyan-500/50'
        : '';
        
    const paddingClasses = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
    };
    
    const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Card;
