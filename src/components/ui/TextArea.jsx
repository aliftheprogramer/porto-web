import React from 'react';

/**
 * Reusable TextArea Component
 * @param {Object} props - TextArea properties
 * @param {string} props.label - TextArea label
 * @param {string} props.placeholder - TextArea placeholder
 * @param {string} props.value - TextArea value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Required field
 * @param {number} props.rows - Number of rows
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} TextArea component
 */
const TextArea = ({
    label,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    rows = 4,
    className = '',
    ...props
}) => {
    const textareaClasses = `w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
        error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-600 focus:ring-cyan-500 focus:border-cyan-500'
    } ${className}`;

    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-gray-300">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
                className={textareaClasses}
                required={required}
                {...props}
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default TextArea;
