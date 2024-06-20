import React from 'react';

const TimeOutput = ({ timeLabel, timeAmount = "- -" }) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-2xl text-yellow-500 font-bold">
                <span>{timeAmount}</span> {timeLabel}
            </h1>
        </div>
    );
};

export default TimeOutput;
