import React from 'react';

const Input = ({ label, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="mb-4">
            <label className="block text-yellow-500 font-bold mb-2">{label}</label>
            <input
                type="number"
                onChange={handleChange}
                className="w-full p-2 border border-yellow-500 rounded bg-gray-800 text-yellow-500 focus:outline-none focus:border-yellow-600"
            />
        </div>
    );
};

export default Input;
