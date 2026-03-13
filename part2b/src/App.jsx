import { useState } from 'react'

const Person = ({name, number}) => {
  // console.log(name)
  return <p>{name}: {number}</p>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      phone: '123-456-789'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      phone: newNumber
    }      
    if (persons.find(person => person.name === newPerson.name)) {
      alert(`I\'m sorry, the name ${newPerson.name} is already in the phone book`)
    } else {
      setPersons(persons.concat(newPerson))
    }
    
    // console.log(persons)
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          phone number: <input onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>~ Numbers ~</h2>
        {persons.map(person =>
        <Person key={person.name} name={person.name} number={person.phone}/>
      )}
      
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App