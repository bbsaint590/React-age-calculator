import { useState } from "react"

const DateOfBirth = (setValue) => {
    const [day, setDay] = useState ("")
    const [month, setMonth] = useState ("")
    const [year, setYear] = useState ("")

    const handleDayChange = (e) => {
        setDay(e.target.value)
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    return (
        <form class="flex justify-between">
        <div>
            <label className="block" htmlFor="dd">DD</label>
            <input type="text" value={day} onChange={handleDayChange} className="border border-slate-200" />
        </div>
        <div>
            <label className="block" htmlfor="mm">Month</label>
            <input type="text" value={month} onChange={handleMonthChange} className="border border-slate-200" />
        </div>
        <div>
            <label className="block" htmlfor="yy">Year</label>
            <input type="text" value={year} onChange={handleYearChange} className="border border-slate-200" />
        </div>
    </form> 
    )
}

export default DateOfBirth