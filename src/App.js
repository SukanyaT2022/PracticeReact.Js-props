import React, { useState } from "react";

const App = () => {
  const [username5, setUsername5] = useState('');
  const [password5, setPassword5] = useState('');
  
  const usernameNew =(event)=>{
      setUsername5(event.target.value)
  }
  
  const passwordNew =(event)=>{
      // setPassword5(event.target.value)
  }

  const clickThen =()=>{
    alert('Successfully submitted')
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
  onChange={(event) => setPassword5(event.target.value)}
  
  
  />
  

 {/* const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const usernameHandler = (event) => { 
setUsername(event.target.value);
 };

 const passwordHandler = (e) => {
setPassword(e.target.value);
};

return(
 <div>
 <input
 type="text"
 placeholder="Username"
 value={username}
 onChange={usernameHandler}
 />
 <input
 type="text"
 placeholder="Password"
 value={password}
 onChange={passwordHandler}
/> */}

<button onClick={clickThen}>Submit Here</button>
</div>
  )
}

export default App;


{/* // import React, { useState } from "react"; */}

{/* // const App = () => { */}
{/* // const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const usernameHandler = (event) => { */}
{/* // setUsername(event.target.value);
// };

// const passwordHandler = (e) => { */}
{/* // setPassword(e.target.value);
// };

// const sumbitHanlder = (e) => { */}
{/* // e.preventDefault();
// let obj = { */}
// username,
// password,
// };
// console.log(obj);
// };

// return (
// <form onSubmit={sumbitHanlder}>
// <input
// type="text"
// placeholder="Username"
// value={username}
// onChange={usernameHandler}
// />
// <input
// type="text"
// placeholder="Password"
// value={password}
// onChange={passwordHandler}
// />
// <button type="submit">Submit</button>
// </form>
// );
// };

// export default App;



{/* <input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/> */}




// import React from "react";
// import Form from "./Form";
//  Parent
// const App = () => {
// const dataHandler = (data) => {
// console.log(data);
// };

// return (
// <div>
// <Form onData={dataHandler} />
// </div>
// );
// };

// export default App;



// import React, { useState } from "react";
// //Shortcut
// const Form = ({ onData }) => {
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const sumbitHanlder = (e) => {
// e.preventDefault();
// let obj = {
// username,
// password,
// };
// onData(obj);
// };

// return (
// <form onSubmit={sumbitHanlder}>
// <input
// type="text"
// placeholder="Username"
// value={username}
// onChange={(e) => setUsername(e.target.value)}
// />
// <input
// type="text"
// placeholder="Password"
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// />
// <button type="submit">Submit</button>
// </form>
// );
// };

// export default Form;