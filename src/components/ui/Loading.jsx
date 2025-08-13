import React from 'react';

/**
 * Loading Spinner Component
 * @param {Object} props - Spinner properties
 * @param {string} props.size - Spinner size
 * @param {string} props.color - Spinner color
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Loading spinner component
 */
const Loading = ({
    size = 'md',
    color = 'cyan',
    className = '',
    ...props
}) => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
    };
    
    const colors = {
        cyan: 'border-cyan-500',
        purple: 'border-purple-500',
        blue: 'border-blue-500',
        green: 'border-green-500',
        red: 'border-red-500',
        yellow: 'border-yellow-500',
    };
    
    const classes = `animate-spin rounded-full border-2 border-t-transparent ${sizes[size]} ${colors[color]} ${className}`;
    
    return (
        <div className={classes} {...props}></div>
    );
};

export default Loading;
