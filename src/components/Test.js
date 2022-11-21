import React, { useState } from 'react'

const TestComponent = ({ initialCounter, appleCb }) => {
  const [counter, setCounter] = useState(initialCounter)
  const [inputVal, setInputVal] = useState('')

  const handleButtonPress = () => {
    setCounter(inputVal)
  }

  return (
    <div>
      <input
        value={inputVal}
        onChange={event => setInputVal(event.target.value)}
      />
      <button onClick={appleCb}>Toggle Apples</button>
      <button onClick={handleButtonPress}>Uptick</button>
      <p>Hello World! {counter}</p>
    </div>
  )
}

export default TestComponent
