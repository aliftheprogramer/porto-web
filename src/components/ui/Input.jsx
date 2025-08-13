import React from 'react';

/**
 * Reusable Input Component
 * @param {Object} props - Input properties
 * @param {string} props.label - Input label
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Input component
 */
const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    required = false,
    className = '',
    ...props
}) => {
    const inputClasses = `w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
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
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={inputClasses}
                required={required}
                {...props}
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default Input;
