import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'arto Hellas', number: '1234567' },
    { name: 'Hellas', number: '040' }
  ]) 
  const [shownPersons, setShownPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'arto Hellas', number: '1234567' },
    { name: 'Hellas', number: '040' }
  ]) 
  const [newName, setNewName] = useState('') // so this is kind of treated as mandatory (is a key)
  const [newNumber, setNewNumber] = useState('') // while this is not
  const [search, setSearch] = useState('')

  const addPerson = (event) => { // not moving this because then two additional values would need to be moved with the Form component
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
        const newPersons = persons.concat(person)
        setPersons(newPersons)
        setShownPersons(newPersons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())))
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

  const handleSearchChange = (event) => {
    setShownPersons(persons.filter((p) => p.name.toLowerCase().includes(event.target.value.toLowerCase())))
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar search={search} handleSearchChange={handleSearchChange}/>
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <List shownPersons={shownPersons}/>
    </div>
  )
}

export default App
