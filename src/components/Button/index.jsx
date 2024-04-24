const Button = ({text, handleClick}) => {
  
    return (

        <button onClick={handleClick} className="bg-violet-600 text-white p-3 mt-3">{text}</button>

    )
}

export default Button