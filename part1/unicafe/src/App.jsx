import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countAverage = () => {
    return (good + neutral + bad) === 0 ? '0.0' : ((good - bad)/(good + neutral + bad)).toFixed(1) // This to look prettier
  }

  const countPositive = () => {
    return (good + neutral + bad) === 0 ? '0.0' : ((good/(good + neutral + bad) * 100)).toFixed(1) // This to look prettier
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {countAverage()}</p>
      <p>positive {countPositive()}%</p>
    </div>
  )
}

export default App
