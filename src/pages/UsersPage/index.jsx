import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'

function UsersPage() {
  const [error, seterror] = useState(null)
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).
    then((data)=>setusers(data.map((user)=>user.name))).
    catch(()=>seterror('Could not fetch user data'))
  }, [])
  
  return (
    <div>
      <Container>
      <Header title="Users" />
      {error && <h1>{error}</h1>}
      <ul>
      {users.map((user,index)=>{
        return (
            <li key={user+index}>{user}</li>
        )
      })}
      </ul>
      </Container>
    </div>
  )
}

export default UsersPage
  