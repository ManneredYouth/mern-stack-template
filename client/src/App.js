import './App.css';
import React, { useState, useEffect } from "react"
import Axios from "axios"

function App() {

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    console.log("Hello World")
    Axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data)
    })
  }, [])

  return (
    <>
      {listOfUsers.map((user) => {
        return (
          <>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1>
          </>
        )
      })}
    </>
  )
}

export default App;