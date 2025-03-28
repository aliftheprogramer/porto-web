import React from 'react';
import PropTypes from 'prop-types';
const CardSection = ({ image, title, desc, codelanguage, icons }) => {
    return (
        <div className="w-[464px] h-auto px-6 pt-8 pb-4 bg-gray-900 rounded-[20px] outline-[3px] outline-offset-[-3px] outline-zinc-800 inline-flex flex-col justify-start items-center gap-8 transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col justify-start items-center gap-8">
                <img className="w-96 h-64 border-2 border-zinc-800" src={image} alt={title} />
                <div className="w-96 flex flex-col justify-start items-center gap-2.5">
                    <div className="self-stretch text-center justify-start text-white text-2xl font-bold font-['Poppins']">{title}</div>
                    <p className="self-stretch justify-start text-white text-lg font-['Roboto']">{desc}</p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-4">
                <p className="w-96 justify-start text-sky-500 text-2xl font-bold font-['Poppins']">{codelanguage}</p>
                {icons.map((icon, index) => (
                    <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center"
                    >
                        {icon.component}
                    </a>
                ))}
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
