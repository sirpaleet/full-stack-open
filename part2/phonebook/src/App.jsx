import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('') // so this is kind of treated as mandatory (is a key)
  const [newNumber, setNewNumber] = useState('') // while this is not

  const addPerson = (event) => {
    event.preventDefault()
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`)
        break
      }
      if (newName === '') {
        alert('Name field cannot be empty')
        break
      }
      if (i === (persons.length - 1)) {
        const person = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <p key={p.name}>{p.name} {p.number}</p>)}
    </div>
  )
}

export default App
