

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
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

const Content = ({names, exercises}) => {
  if (names.length === exercises.length) {
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
      <Part name={names[0]} exercise={exercises[0]}/>
      <Part name={names[1]} exercise={exercises[1]}/>
      <Part name={names[2]} exercise={exercises[2]}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content names={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
      <Total  exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App
