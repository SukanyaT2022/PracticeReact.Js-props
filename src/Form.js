import React, { useState } from "react";

// Child to parent

const Form = (props) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const sumbitHanlder = (e) => {
e.preventDefault();
let obj = {
username,
password,
};
props.onData(obj);
};

return (
<form onSubmit={sumbitHanlder}>
<input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="text"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button type="submit">Submit</button>
</form>
);
};

export default Form;