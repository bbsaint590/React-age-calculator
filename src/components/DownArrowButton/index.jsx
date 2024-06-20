import React from 'react';

const DownArrowButton = ({ handleClick }) => {
    return (
        <button className="bg-yellow-500 text-black p-2 rounded-full mt-4 hover:bg-yellow-600" onClick={handleClick}>
            ↓
        </button>
    );
};

export default DownArrowButton;

