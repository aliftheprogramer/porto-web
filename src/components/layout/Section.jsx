import React from 'react';

/**
 * Main Section Layout Component
 * @param {Object} props - Section properties
 * @param {string} props.id - Section ID for navigation
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.fullHeight - Full viewport height
 * @param {string} props.background - Background style
 * @returns {JSX.Element} Section component
 */
const Section = ({
    id,
    children,
    className = '',
    fullHeight = false,
    background = 'default',
    ...props
}) => {
    const baseClasses = 'w-full';
    
    const heightClasses = fullHeight ? 'min-h-screen' : 'py-20';
    
    const backgroundStyles = {
        default: '',
        dark: 'bg-gray-900',
        darker: 'bg-black',
        gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    };
    
    const classes = `${baseClasses} ${heightClasses} ${backgroundStyles[background]} ${className}`;
    
    return (
        <section id={id} className={classes} {...props}>
            {children}
        </section>
    );
};

export default Section;
