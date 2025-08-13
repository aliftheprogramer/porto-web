import React from 'react';

/**
 * Icons8 Icon Component
 * @param {Object} props - Icon properties
 * @param {string} props.name - Icon name from Icons8
 * @param {string} props.size - Icon size (default: 24)
 * @param {string} props.color - Icon color (default: currentColor)
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Icon component
 */
const Icon = ({
    name,
    size = '24',
    color = 'currentColor',
    className = '',
    ...props
}) => {
    const iconUrl = `https://img.icons8.com/${color}/${size}/${name}.png`;
    
    return (
        <img
            src={iconUrl}
            alt={`${name} icon`}
            width={size}
            height={size}
            className={`inline-block ${className}`}
            {...props}
        />
    );
};

export default Icon;
