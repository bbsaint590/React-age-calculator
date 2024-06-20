import React, { useState } from 'react';
import DownArrowButton from '/src/components/DownArrowButton/index.jsx';
import Input from '/src/components/Input/index.jsx';
import TimeOutput from '/src/components/TimeOutput/index.jsx';

const AgeCalculator = () => {
    const [dayValue, setDayValue] = useState(0);
    const [monthValue, setMonthValue] = useState(0);
    const [yearValue, setYearValue] = useState(0);

    const [yearAmount, setYearAmount] = useState("- -");
    const [monthAmount, setMonthAmount] = useState("- -");
    const [dayAmount, setDayAmount] = useState("- -");

    const calculateAge = () => {
        const currentDate = new Date();
        const dob = new Date(yearValue, monthValue - 1, dayValue);
        const diff = currentDate - dob;
        const years = diff / 31536000000;
        const months = ((years - Math.floor(years)) * 12);
        const days = ((months - Math.floor(months)) * 30);
        setYearAmount(Math.floor(years));
        setMonthAmount(Math.floor(months));
        setDayAmount(Math.floor(days));
    };

    return (
        <div className="bg-black border-2 border-yellow-500 rounded-lg p-6 shadow-lg text-center">
            <div className="mb-4">
                <Input label="Day" setValue={setDayValue} />
                <Input label="Month" setValue={setMonthValue} />
                <Input label="Year" setValue={setYearValue} />
            </div>
            <DownArrowButton handleClick={calculateAge} />
            <div className="mt-4">
                <TimeOutput timeLabel="years" timeAmount={yearAmount} />
                <TimeOutput timeLabel="months" timeAmount={monthAmount} />
                <TimeOutput timeLabel="days" timeAmount={dayAmount} />
            </div>
        </div>
    );
};

export default AgeCalculator;
