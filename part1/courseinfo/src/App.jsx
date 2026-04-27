

const Header = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = ({ name, exercise }) => {
  return (
    <div>
      <p>
        {name} {exercise}
      </p>
    </div>
  )
}

const Content = ({ parts }) => {
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
    <Part name={parts[0].name} exercise={parts[0].exercises}/>
    <Part name={parts[1].name} exercise={parts[1].exercises}/>
    <Part name={parts[2].name} exercise={parts[2].exercises}/>
  </div>
  )
}

const Total = ({ parts }) => {
  /**return (
    <div>
      <p>Number of exercises {exercises.reduce((sum, value) => sum + value, 0)}</p>
    </div>
  )**/
 // This here is the "bad" way of doing this as well, but done as by the example:
 return (
  <div>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  </div>
 )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total  parts={course.parts}/>
    </div>
  )
}

export default App
