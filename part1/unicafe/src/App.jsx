import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) === 0 ) {
    return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
         <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
          <StatisticLine text="average" value={props.countAverage()} />
          <StatisticLine text="positive" value={`${props.countPositive()}%`} />
        </tbody>
      </table>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} countAverage={countAverage} countPositive={countPositive} />
    </div>
  )
}

export default App
