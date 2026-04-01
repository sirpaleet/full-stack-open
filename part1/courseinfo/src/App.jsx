

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts, exercises}) => {
  if (parts.length === exercises.length) {
    // Creating the loop to render both list contents as long as they are
    /**const paragraphs = [];
    for (let i = 0; i < parts.length; i++) {
        paragraphs.push(
        <p>
          {parts[i]} {exercises[i]}
        </p>
        );
    }
    return (
      <div>
        {paragraphs}
      </div>
    )**/
   // This here is the "bad" way of doing this as well, but done as by the example:
   return (
    <div>
      <p>
        {parts[0]} {exercises[0]}
      </p>
      <p>
        {parts[1]} {exercises[1]}
      </p>
      <p>
        {parts[2]} {exercises[2]}
      </p>
    </div>
   )
  } else {
    return (
      <div>
        <p>
          Something went wrong, not equal array sizes
        </p>
      </div>
    )
  }
}

const Total = ({ exercises }) => {
  /**return (
    <div>
      <p>Number of exercises {exercises.reduce((sum, value) => sum + value, 0)}</p>
    </div>
  )**/
 // This here is the "bad" way of doing this as well, but done as by the example:
 return (
  <div>
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  </div>
 )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total  exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
