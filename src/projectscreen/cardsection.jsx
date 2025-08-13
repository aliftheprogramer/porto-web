import React from 'react';
import PropTypes from 'prop-types';

const CardSection = ({ image, title, desc, codelanguage, icons }) => {
    return (
        // Mobile-first: flex-col. Desktop: lg:flex-row, lg:h-80 (320px)
        <div className="w-full max-w-lg lg:max-w-none lg:w-full h-auto lg:h-80 bg-gray-900 rounded-[20px] outline-[3px] outline-offset-[-3px] outline-zinc-800 flex flex-col lg:flex-row transform transition-transform duration-300 hover:scale-105 overflow-hidden">
            {/* Image Section */}
            <img className="w-full h-48 lg:w-2/5 lg:h-full object-cover" src={image} alt={title} />
            
            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6 justify-between">
                <div className="flex flex-col gap-2">
                    <div className="text-white text-2xl font-bold font-['Poppins']">{title}</div>
                    <p className="text-white text-sm font-['Roboto'] overflow-hidden text-ellipsis lg:line-clamp-none">
                        {desc}
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-4">
                    <p className="text-sky-500 text-lg font-bold font-['Poppins'] flex-1">{codelanguage}</p>
                    <div className="flex gap-4">
                        {icons.map((icon, index) => (
                            <a
                                key={index}
                                href={icon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center text-white hover:text-sky-500 transition-colors duration-300"
                            >
                                {icon.component}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

CardSection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    codelanguage: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            component: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default CardSection;
