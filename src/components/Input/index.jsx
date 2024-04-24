const Input = ({setValue}) => {
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (

 <form class="flex justify-between">
    <div>
        <label className="block" htmlFor="dd">Day</label>
        <input type="text" onChange={handleChange} id="dd" className="border border-slate-200" />
    </div>
    <div>
        <label className="block" htmlfor="mm">Month</label>
        <input type="text" onChange={handleChange} id="mm" className="border border-slate-200" />
    </div>
    <div>
        <label className="block" htmlfor="yy">Year</label>
        <input type="text" onChange={handleChange} id="yy" className="border border-slate-200" />
    </div>
</form> 
    )
    }

export default Input


// <label className="amount" htmlFor="amount">{input}</label>
// <input className="amount" type="number" name="amount" />