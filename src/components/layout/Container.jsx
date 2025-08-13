import React from 'react';

/**
 * Container Component for consistent max-width and padding
 * @param {Object} props - Container properties
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.size - Container max width
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Container component
 */
const Container = ({
    children,
    size = 'xl',
    className = '',
    ...props
}) => {
    const sizes = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        '2xl': 'max-w-screen-2xl',
        full: 'max-w-full',
    };
    
    const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`;
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Container;
