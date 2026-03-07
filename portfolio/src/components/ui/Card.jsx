import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <div
            className={`
        bg-white border border-slate-200 
        rounded-xl p-2 md:p-3 lg:p-4 shadow-sm 
        ${hover ? 'hover:shadow-md hover:border-slate-300' : ''} 
        transition-all duration-300 
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
