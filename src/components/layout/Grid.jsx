import React from 'react';

/**
 * Grid Layout Component
 * @param {Object} props - Grid properties
 * @param {React.ReactNode} props.children - Grid content
 * @param {string} props.cols - Number of columns
 * @param {string} props.gap - Gap between items
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Grid component
 */
const Grid = ({
    children,
    cols = '1',
    gap = '6',
    className = '',
    ...props
}) => {
    const gridCols = {
        '1': 'grid-cols-1',
        '2': 'grid-cols-1 md:grid-cols-2',
        '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        '6': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    };
    
    const gaps = {
        '4': 'gap-4',
        '6': 'gap-6',
        '8': 'gap-8',
        '10': 'gap-10',
        '12': 'gap-12',
    };
    
    const classes = `grid ${gridCols[cols]} ${gaps[gap]} ${className}`;
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Grid;
