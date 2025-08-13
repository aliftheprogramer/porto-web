import React from 'react';

/**
 * Reusable Badge Component
 * @param {Object} props - Badge properties
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} props.variant - Badge style variant
 * @param {string} props.size - Badge size
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Badge component
 */
const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-300';
    
    const variants = {
        default: 'bg-gray-700 text-gray-300',
        primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white',
        secondary: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-black',
        danger: 'bg-red-500 text-white',
        outline: 'border-2 border-gray-600 text-gray-300 bg-transparent',
    };
    
    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
};

export default Badge;
