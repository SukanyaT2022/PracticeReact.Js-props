import React, { useState } from 'react'

const App3 =()=> {
const [username5, setUsername5] = useState('');
const [password5, setPassword5] = useState('');

const usernameNew =(event)=>{
    setUsername5(event.target.value)
}

const passwordNew =(event)=>{
    setPassword5(event.target.value)
}


  return (
<div>
<input
type='text'
placeholder='Username'
value = {username5}
onChange={usernameNew}
/>
<input
type='text'
placeholder='Password'
value ={password5}
// onChange={passwordNew}
onChange={(event) => setPassword5(e.target.value)}


/>


</div>


  )
}

export default App3