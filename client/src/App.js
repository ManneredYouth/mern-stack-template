import './App.css';
import React, { useState, useEffect } from "react"
import Axios from "axios"

function App() {

  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(() => {
    console.log("Hello World")
    Axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data)
    })
  }, [])

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", 
    {
      name: name,
      age: age,
      username: username
      // Could also be: 
      // 
      // name,
      // age,
      // username
    }).then((response) => {
      alert("USER CREATED")
      setListOfUsers([...listOfUsers, {
        name: name,
        age: age,
        username: username
      }])
    })
  }

  return (
    <>
      {listOfUsers.map((user) => {
        return (
          <>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1>
            <br />
            <br />
          </>
        )
      })}
            <div>
              <input type="text" placeholder="Name..." onChange={(event) => {
                setName(event.target.value)
              }}/>
              <input type="number" placeholder="Age..." onChange={(event) => {
                setAge(event.target.value)
              }}/>
              <input type="text" placeholder="Username..." onChange={(event) => {
                setUsername(event.target.value)
              }}/>
              <button onClick={createUser}>Create User</button>
            </div>
    </>
  )
}

export default App;