import './App.css'
import Button from './components/Button'
import DateOfBirth from './components/DateOfBirth'
import AgeCalculator from './components/Input'
import Input from './components/Input'
import Output from './components/Output'

function App() {

  const [inputValue, setinputValue] = useState ("")
}

<div class="bg-slate-400 w-full h-full">

  <div class="bg-white rounded p-6 pr-36 w-full max-w-3xl mx-auto mt-3">
    {/* <Input setValue={setinputValue} handleChange={set} /> */}
    {/* <Button text='Go' />
    <Output />
    <AgeCalculator /> */}
    <DateOfBirth setValue={setInputValue} handleDayChange={set} value={inputValue} />
    
  

  </div>
</div>


export default App
