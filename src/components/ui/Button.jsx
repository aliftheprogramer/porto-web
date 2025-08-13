import React from 'react';

/**
 * Reusable Button Component
 * @param {Object} props - Button properties
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button style variant
 * @param {string} props.size - Button size
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.href - Link URL for anchor buttons
 * @returns {JSX.Element} Button component
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    href,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
        primary: 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-700 focus:ring-cyan-500',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-500',
        ghost: 'text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-500',
    };
    
    const sizes = {
        sm: 'px-3 py-2 text-sm rounded-md',
        md: 'px-4 py-2 text-base rounded-lg',
        lg: 'px-6 py-3 text-lg rounded-lg',
        xl: 'px-8 py-4 text-xl rounded-xl',
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...props}
            >
                {children}
            </a>
        );
    }
    
    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
