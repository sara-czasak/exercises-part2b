import { useState } from 'react'
import Person from './components/Person'
import Found from './components/Found'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      phone: '123-456-789',
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [foundPerson, setFoundPerson] = useState({
    name: '',
    phone: '',
  })

  const findContact = (event) => {
    event.preventDefault()
    console.log('search name ', searchName.toLowerCase())
    console.log('person name ', persons[0].name.toLowerCase())
    if (persons.find(person => (person.name).toLowerCase() === searchName.toLowerCase())) {
      const found = persons.find(person => (person.name).toLowerCase() === searchName.toLowerCase())
      if (found) {
        const newFoundContact = {
        name: searchName,
        phone: found.phone
      }
      console.log(found.phone)
      setFoundPerson(newFoundContact)
      }
      
    }
  }


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

  const handleContactSearch = (event) => {
    setSearchName(event.target.value)
    console.log("search name ",searchName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <br></br>
      <h3>~ Find contact ~</h3>
      <div>
        <form onSubmit={findContact}>
         <input onChange={handleContactSearch}/>
        <button type="submit">search</button> 
        </form>
        <Found key={foundPerson} name={foundPerson.name} number={foundPerson.phone} />
      </div>
      {/* <div>debug: {foundPerson.name}</div> */}
      <br></br>
      <h3>~ Add new contact ~</h3>
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
      <br></br>
      <h3>~ Numbers ~</h3>
        {persons.map(person =>
        <Person key={person.name} name={person.name} number={person.phone}/>
      )}
      
      
    </div>
  )
}

export default App